import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Timer, RotateCcw, Trophy } from 'lucide-react';
import Button from '../components/ui/Button';
import Confetti from '../components/ui/Confetti';
import { hiraganaData, GROUPS } from '../data/hiragana';
import { useProgressStore } from '../store/useProgressStore';
import { useSound } from '../hooks/useAudio';
import { shuffle } from '../utils/spaced-repetition';
import { clsx } from 'clsx';

const BOARD_SIZES = [
  { label: '4 cặp (Dễ)', pairs: 4 },
  { label: '6 cặp (TB)', pairs: 6 },
  { label: '8 cặp (Khó)', pairs: 8 },
];

function buildTiles(count) {
  const pool = shuffle(hiraganaData.filter((c) => c.group === GROUPS.BASIC)).slice(0, count);
  const tiles = [
    ...pool.map((c, i) => ({ id: `k-${i}`, cardId: c.id, display: c.kana, type: 'kana', kana: c.kana })),
    ...pool.map((c, i) => ({ id: `r-${i}`, cardId: c.id, display: c.romaji, type: 'romaji', kana: c.kana })),
  ];
  return shuffle(tiles);
}

export default function Game() {
  const [pairs, setPairs] = useState(4);
  const [tiles, setTiles] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [moves, setMoves] = useState(0);
  const [timer, setTimer] = useState(0);
  const [running, setRunning] = useState(false);
  const [phase, setPhase] = useState('config');
  const [confetti, setConfetti] = useState(false);

  const { markCorrect } = useProgressStore();
  const { play } = useSound();

  useEffect(() => {
    let t;
    if (running) t = setInterval(() => setTimer((s) => s + 1), 1000);
    return () => clearInterval(t);
  }, [running]);

  const startGame = useCallback(() => {
    setTiles(buildTiles(pairs));
    setFlipped([]);
    setMatched([]);
    setMoves(0);
    setTimer(0);
    setRunning(true);
    setPhase('game');
  }, [pairs]);

  useEffect(() => {
    if (flipped.length === 2) {
      const [a, b] = flipped;
      const tileA = tiles.find((t) => t.id === a);
      const tileB = tiles.find((t) => t.id === b);
      setMoves((m) => m + 1);
      if (tileA.cardId === tileB.cardId) {
        play('correct');
        markCorrect(tileA.cardId);
        const newMatched = [...matched, tileA.cardId];
        setMatched(newMatched);
        setFlipped([]);
        if (newMatched.length === pairs) {
          setRunning(false);
          setConfetti(true);
          setTimeout(() => { setConfetti(false); setPhase('summary'); }, 2500);
        }
      } else {
        play('wrong');
        setTimeout(() => setFlipped([]), 900);
      }
    }
  }, [flipped]);

  const handleTile = (tile) => {
    if (matched.includes(tile.cardId)) return;
    if (flipped.includes(tile.id)) return;
    if (flipped.length >= 2) return;
    setFlipped((f) => [...f, tile.id]);
  };

  const isFaceUp = (tile) => flipped.includes(tile.id) || matched.includes(tile.cardId);
  const isMatched = (tile) => matched.includes(tile.cardId);

  const formatTime = (s) => `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;

  if (phase === 'config') {
    return (
      <div className="py-6 flex flex-col gap-5">
        <h1 className="text-2xl font-bold text-white">🎮 Memory Game</h1>
        <p className="text-white/50 text-sm">Ghép cặp Hiragana với Romaji tương ứng!</p>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
          <p className="text-xs text-white/40 uppercase tracking-wider mb-3">Độ khó</p>
          <div className="flex flex-col gap-2">
            {BOARD_SIZES.map(({ label, pairs: p }) => (
              <button
                key={p}
                onClick={() => setPairs(p)}
                className={clsx(
                  'w-full px-4 py-3 rounded-xl text-sm font-medium text-left border transition-all',
                  pairs === p
                    ? 'bg-emerald-500/30 border-emerald-500 text-emerald-300'
                    : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10'
                )}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <Button variant="success" size="lg" className="w-full" onClick={startGame}>
          Bắt đầu Game →
        </Button>
      </div>
    );
  }

  if (phase === 'summary') {
    const star = moves <= pairs * 2 ? 3 : moves <= pairs * 3 ? 2 : 1;
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
        className="py-6 flex flex-col gap-5 items-center"
      >
        <Confetti active={true} />
        <div className="text-6xl">{'⭐'.repeat(star)}</div>
        <h2 className="text-3xl font-bold text-white">Hoàn thành!</h2>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 w-full grid grid-cols-2 gap-4 text-center">
          <div>
            <div className="text-3xl font-bold text-emerald-400">{moves}</div>
            <div className="text-white/50 text-sm">Lượt đoán</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-sky-400">{formatTime(timer)}</div>
            <div className="text-white/50 text-sm">Thời gian</div>
          </div>
        </div>
        <div className="flex gap-3 w-full">
          <Button variant="secondary" className="flex-1" onClick={() => setPhase('config')}>
            Đổi độ khó
          </Button>
          <Button variant="success" className="flex-1" onClick={startGame}>
            <RotateCcw size={16} className="inline mr-2" />Chơi lại
          </Button>
        </div>
      </motion.div>
    );
  }

  const cols = pairs <= 4 ? 'grid-cols-4' : pairs <= 6 ? 'grid-cols-4' : 'grid-cols-4';

  return (
    <div className="py-6 flex flex-col gap-4">
      <Confetti active={confetti} />
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-white">🎮 Memory Game</h1>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 bg-sky-500/20 border border-sky-500/30 rounded-full px-2.5 py-1 text-sky-300 text-sm font-bold">
            <Timer size={14} />{formatTime(timer)}
          </div>
          <div className="bg-violet-500/20 border border-violet-500/30 rounded-full px-2.5 py-1 text-violet-300 text-sm font-bold">
            {moves} lượt
          </div>
        </div>
      </div>

      <div className="flex items-center gap-1.5 flex-wrap">
        {Array.from({ length: pairs }).map((_, i) => (
          <div
            key={i}
            className={clsx(
              'w-4 h-4 rounded-full transition-all',
              i < matched.length ? 'bg-emerald-400' : 'bg-white/10'
            )}
          />
        ))}
        <span className="text-white/40 text-xs ml-1">{matched.length}/{pairs} cặp</span>
      </div>

      <div className={`grid ${cols} gap-2`}>
        {tiles.map((tile) => (
          <motion.button
            key={tile.id}
            whileHover={!isFaceUp(tile) ? { scale: 1.05 } : {}}
            whileTap={!isFaceUp(tile) ? { scale: 0.95 } : {}}
            onClick={() => handleTile(tile)}
            className={clsx(
              'aspect-square rounded-2xl border font-bold text-center transition-all duration-300 flex items-center justify-center',
              isMatched(tile)
                ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-300 cursor-default'
                : isFaceUp(tile)
                ? 'bg-violet-500/20 border-violet-500/50 text-white'
                : 'bg-white/5 border-white/10 hover:border-violet-500/30 cursor-pointer'
            )}
          >
            <AnimatePresence mode="wait">
              {isFaceUp(tile) ? (
                <motion.span
                  key="front"
                  initial={{ rotateY: 90 }}
                  animate={{ rotateY: 0 }}
                  className={tile.type === 'kana' ? 'text-2xl font-thin' : 'text-sm font-bold'}
                  style={tile.type === 'kana' ? { fontFamily: 'serif' } : {}}
                >
                  {tile.display}
                </motion.span>
              ) : (
                <motion.span key="back" className="text-2xl text-white/20">
                  🌸
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        ))}
      </div>

      <Button variant="ghost" size="sm" className="self-start" onClick={startGame}>
        <RotateCcw size={14} className="inline mr-1" />Restart
      </Button>
    </div>
  );
}
