import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, Lightbulb } from 'lucide-react';
import { useSpeech, useSound } from '../../hooks/useAudio';
import { useProgressStore } from '../../store/useProgressStore';
import Button from '../ui/Button';
import DrawingCanvas from './DrawingCanvas';

export default function FlashCard({ card, onNext, onPrev, showNav = true, mode = 'normal' }) {
  const [flipped, setFlipped] = useState(false);
  const [showTip, setShowTip] = useState(false);
  const { speak } = useSpeech();
  const { play } = useSound();
  const markSeen = useProgressStore((s) => s.markSeen);
  const cardData = useProgressStore((s) => s.learnedCards[card.id]);
  const total = (cardData?.correct || 0) + (cardData?.wrong || 0);
  const stats = {
    seen: cardData?.seen || 0,
    correct: cardData?.correct || 0,
    wrong: cardData?.wrong || 0,
    accuracy: total ? Math.round(((cardData?.correct || 0) / total) * 100) : 0,
  };

  useEffect(() => {
    setFlipped(false);
    setShowTip(false);
    markSeen(card.id);
    speak(card.kana, { force: mode === 'practice' });
  }, [card.id, mode]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.code === 'Space') {
        e.preventDefault();
        handleFlip();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [flipped]);

  const handleFlip = () => {
    play('flip');
    setFlipped((f) => !f);
    if (!flipped) speak(card.kana, { force: true });
  };

  const handleSpeak = (e) => {
    e.stopPropagation();
    speak(card.kana, { force: true });
  };

  const accuracyColor = stats.accuracy >= 80 ? 'text-emerald-400'
    : stats.accuracy >= 50 ? 'text-amber-400' : 'text-rose-400';

  if (mode === 'practice') {
    return (
      <div className="flex flex-col items-center gap-4 w-full">
        {/* Practice card */}
        <div
          className="w-full max-w-sm h-64 cursor-pointer"
          onClick={handleFlip}
          style={{ perspective: '1000px' }}
        >
          <motion.div
            animate={{ rotateY: flipped ? 180 : 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            style={{ transformStyle: 'preserve-3d', position: 'relative', width: '100%', height: '100%' }}
          >
            {/* Practice front: romaji only */}
            <div
              className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-900/60 to-violet-900/40 border border-indigo-500/30 backdrop-blur-xl flex flex-col items-center justify-center gap-3 shadow-2xl shadow-indigo-900/40"
              style={{ backfaceVisibility: 'hidden' }}
            >
              <div className="text-xs text-white/40 font-medium uppercase tracking-widest">
                Viết chữ này
              </div>
              <div className="text-8xl font-bold text-white tracking-wide">
                {card.romaji}
              </div>
              {stats.seen > 0 && (
                <div className={`text-xs ${accuracyColor}`}>
                  {stats.accuracy}% chính xác
                </div>
              )}
              <div className="text-white/20 text-xs">Nhấn để xem đáp án</div>
            </div>

            {/* Practice back: reveal kana */}
            <div
              className="absolute inset-0 rounded-3xl bg-gradient-to-br from-fuchsia-900/60 to-violet-900/40 border border-fuchsia-500/30 backdrop-blur-xl flex flex-col items-center justify-center gap-4 shadow-2xl shadow-fuchsia-900/40"
              style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
            >
              <div className="text-9xl font-thin text-white leading-none" style={{ fontFamily: 'serif' }}>
                {card.kana}
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-fuchsia-300 to-violet-300 bg-clip-text text-transparent">
                {card.romaji}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Drawing canvas */}
        <DrawingCanvas resetKey={card.id} />

        {/* Navigation */}
        {showNav && (
          <div className="flex gap-3 w-full max-w-sm">
            <Button variant="secondary" className="flex-1" onClick={onPrev}>← Trước</Button>
            <Button variant="primary" className="flex-1" onClick={onNext}>Tiếp →</Button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      {/* Card */}
      <div
        className="w-full max-w-sm h-72 cursor-pointer perspective-1000"
        onClick={handleFlip}
        style={{ perspective: '1000px' }}
      >
        <motion.div
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          style={{ transformStyle: 'preserve-3d', position: 'relative', width: '100%', height: '100%' }}
        >
          {/* Front */}
          <div
            className="absolute inset-0 rounded-3xl bg-gradient-to-br from-violet-900/60 to-fuchsia-900/40 border border-violet-500/30 backdrop-blur-xl flex flex-col items-center justify-center gap-3 shadow-2xl shadow-violet-900/40"
            style={{ backfaceVisibility: 'hidden' }}
          >
            <div className="text-sm text-white/40 font-medium uppercase tracking-widest">
              {card.group}
            </div>
            <motion.div
              key={card.kana}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-8xl font-thin text-white leading-none"
              style={{ fontFamily: 'serif' }}
            >
              {card.kana}
            </motion.div>
            <div className="text-white/30 text-sm">Nhấn để lật</div>
            {stats.seen > 0 && (
              <div className={`text-xs ${accuracyColor}`}>
                {stats.accuracy}% chính xác
              </div>
            )}
          </div>

          {/* Back */}
          <div
            className="absolute inset-0 rounded-3xl bg-gradient-to-br from-fuchsia-900/60 to-violet-900/40 border border-fuchsia-500/30 backdrop-blur-xl flex flex-col items-center justify-center gap-3 p-6 shadow-2xl shadow-fuchsia-900/40"
            style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
          >
            <div className="text-6xl font-thin text-white" style={{ fontFamily: 'serif' }}>
              {card.kana}
            </div>
            <div className="text-3xl font-bold bg-gradient-to-r from-fuchsia-300 to-violet-300 bg-clip-text text-transparent">
              {card.romaji}
            </div>
            <div className="flex items-center gap-2 flex-wrap justify-center">
              {card.examples.slice(0, 2).map((ex) => (
                <div key={ex.word} className="bg-white/10 rounded-xl px-3 py-1.5 text-center">
                  <div className="text-white font-medium text-sm">{ex.word}</div>
                  <div className="text-white/50 text-xs">{ex.meaning}</div>
                </div>
              ))}
            </div>
            <div className="text-2xl">{card.illustration}</div>
          </div>
        </motion.div>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-3">
        <Button variant="glass" size="icon" onClick={handleSpeak}>
          <Volume2 size={18} />
        </Button>
        <Button
          variant="glass" size="icon"
          onClick={(e) => { e.stopPropagation(); setShowTip((t) => !t); }}
        >
          <Lightbulb size={18} className={showTip ? 'text-amber-400' : ''} />
        </Button>
      </div>

      {/* Mnemonic tip */}
      <AnimatePresence>
        {showTip && (
          <motion.div
            initial={{ opacity: 0, y: -10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -10, height: 0 }}
            className="w-full max-w-sm bg-amber-500/10 border border-amber-500/20 rounded-2xl p-4"
          >
            <div className="flex items-start gap-2">
              <span className="text-xl">{card.emoji}</span>
              <p className="text-amber-200 text-sm leading-relaxed">{card.mnemonic}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation */}
      {showNav && (
        <div className="flex gap-3 w-full max-w-sm">
          <Button variant="secondary" className="flex-1" onClick={onPrev}>← Trước</Button>
          <Button variant="primary" className="flex-1" onClick={onNext}>Tiếp →</Button>
        </div>
      )}
    </div>
  );
}
