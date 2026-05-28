import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, XCircle, Volume2, Trophy, RotateCcw } from 'lucide-react';
import Button from '../components/ui/Button';
import ProgressBar from '../components/ui/ProgressBar';
import Confetti from '../components/ui/Confetti';
import { hiraganaData, GROUPS, groupLabels } from '../data/hiragana';
import { useProgressStore } from '../store/useProgressStore';
import { useSpeech, useSound } from '../hooks/useAudio';
import { getQuizChoices, shuffle } from '../utils/spaced-repetition';
import { clsx } from 'clsx';

const QUIZ_TYPES = [
  { id: 'kana_to_romaji', label: 'Kana → Romaji' },
  { id: 'romaji_to_kana', label: 'Romaji → Kana' },
  { id: 'audio_to_kana', label: 'Nghe → Kana' },
];

const TOTAL_QUESTIONS = 10;

function buildQuestions(groups, type) {
  const pool = hiraganaData.filter((c) => groups.includes(c.group));
  const qs = shuffle(pool).slice(0, Math.min(TOTAL_QUESTIONS, pool.length));
  return qs.map((correct) => ({
    correct,
    choices: getQuizChoices(correct, pool),
    type,
  }));
}

export default function Quiz() {
  const [quizType, setQuizType] = useState('kana_to_romaji');
  const [selectedGroups, setSelectedGroups] = useState(['basic']);
  const [questions, setQuestions] = useState([]);
  const [qIndex, setQIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [confetti, setConfetti] = useState(false);
  const [phase, setPhase] = useState('config'); // config | quiz | summary

  const { markCorrect, markWrong, updateStreak } = useProgressStore();
  const { speak } = useSpeech();
  const { play } = useSound();

  const startQuiz = useCallback(() => {
    const qs = buildQuestions(selectedGroups, quizType);
    setQuestions(qs);
    setQIndex(0);
    setSelected(null);
    setScore(0);
    setStreak(0);
    setShowResult(false);
    setPhase('quiz');
  }, [selectedGroups, quizType]);

  const current = questions[qIndex];

  useEffect(() => {
    if (phase === 'quiz' && current) {
      if (quizType === 'audio_to_kana') {
        setTimeout(() => speak(current.correct.kana, { force: true }), 300);
      }
    }
  }, [qIndex, phase, current, quizType]);

  const handleSelect = (choice) => {
    if (selected) return;
    setSelected(choice);
    const correct = choice.id === current.correct.id;
    if (correct) {
      play('correct');
      markCorrect(current.correct.id);
      setScore((s) => s + 1);
      setStreak((s) => s + 1);
      if (streak + 1 >= 3) {
        setConfetti(true);
        setTimeout(() => setConfetti(false), 2000);
      }
    } else {
      play('wrong');
      markWrong(current.correct.id);
      setStreak(0);
      speak(current.correct.kana, { force: true });
    }
    setTimeout(() => {
      if (qIndex + 1 >= questions.length) {
        updateStreak();
        setPhase('summary');
      } else {
        setQIndex((i) => i + 1);
        setSelected(null);
        setShowResult(false);
      }
    }, 1200);
  };

  const getChoiceStyle = (choice) => {
    if (!selected) return 'bg-white/5 border-white/10 hover:bg-white/15 hover:border-violet-500/50 text-white';
    if (choice.id === current.correct.id) return 'bg-emerald-500/20 border-emerald-500 text-emerald-300';
    if (choice.id === selected.id) return 'bg-rose-500/20 border-rose-500 text-rose-300';
    return 'bg-white/5 border-white/10 text-white/30';
  };

  if (phase === 'config') {
    return (
      <div className="py-6 flex flex-col gap-5">
        <h1 className="text-2xl font-bold text-white">🧠 Quiz Mode</h1>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
          <p className="text-xs text-white/40 uppercase tracking-wider mb-3">Loại quiz</p>
          <div className="flex flex-col gap-2">
            {QUIZ_TYPES.map((t) => (
              <button
                key={t.id}
                onClick={() => setQuizType(t.id)}
                className={clsx(
                  'w-full px-4 py-3 rounded-xl text-sm font-medium text-left transition-all border',
                  quizType === t.id
                    ? 'bg-violet-500/30 border-violet-500 text-violet-300'
                    : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10'
                )}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
          <p className="text-xs text-white/40 uppercase tracking-wider mb-3">Nhóm ký tự</p>
          <div className="flex flex-wrap gap-2">
            {Object.values(GROUPS).map((g) => {
              const active = selectedGroups.includes(g);
              const count = hiraganaData.filter((c) => c.group === g).length;
              return (
                <button
                  key={g}
                  onClick={() => {
                    const next = active
                      ? selectedGroups.filter((x) => x !== g)
                      : [...selectedGroups, g];
                    if (next.length) setSelectedGroups(next);
                  }}
                  className={clsx(
                    'px-3 py-1.5 rounded-xl text-sm font-medium transition-all',
                    active ? 'bg-violet-500 text-white' : 'bg-white/10 text-white/60 hover:bg-white/20'
                  )}
                >
                  {groupLabels[g]} ({count})
                </button>
              );
            })}
          </div>
        </div>

        <Button variant="primary" size="lg" className="w-full" onClick={startQuiz}>
          Bắt đầu Quiz →
        </Button>
      </div>
    );
  }

  if (phase === 'summary') {
    const pct = Math.round((score / questions.length) * 100);
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="py-6 flex flex-col gap-5 items-center"
      >
        <Confetti active={pct >= 80} />
        <div className="text-6xl">{pct >= 80 ? '🏆' : pct >= 50 ? '👍' : '📚'}</div>
        <h2 className="text-3xl font-bold text-white text-center">
          {pct >= 80 ? 'Xuất sắc!' : pct >= 50 ? 'Không tệ!' : 'Cần luyện thêm!'}
        </h2>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 w-full text-center">
          <div className="text-5xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
            {score}/{questions.length}
          </div>
          <div className="text-white/50 mt-1">{pct}% chính xác</div>
          <ProgressBar value={score} max={questions.length} color={pct >= 80 ? 'emerald' : pct >= 50 ? 'amber' : 'rose'} className="mt-4" />
        </div>

        <div className="flex gap-3 w-full">
          <Button variant="secondary" className="flex-1" onClick={() => setPhase('config')}>
            <RotateCcw size={16} className="inline mr-2" />Đổi cài đặt
          </Button>
          <Button variant="primary" className="flex-1" onClick={startQuiz}>
            Chơi lại
          </Button>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="py-6 flex flex-col gap-5">
      <Confetti active={confetti} />

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-white">🧠 Quiz</h1>
          <p className="text-white/40 text-sm">Câu {qIndex + 1}/{questions.length}</p>
        </div>
        <div className="flex items-center gap-2">
          {streak >= 2 && (
            <motion.div
              initial={{ scale: 0 }} animate={{ scale: 1 }}
              className="bg-amber-500/20 border border-amber-500/30 rounded-full px-2.5 py-1 text-amber-300 text-sm font-bold"
            >
              🔥 {streak}
            </motion.div>
          )}
          <div className="bg-emerald-500/20 border border-emerald-500/30 rounded-full px-2.5 py-1 text-emerald-300 text-sm font-bold">
            +{score * 10} XP
          </div>
        </div>
      </div>

      <ProgressBar value={qIndex + 1} max={questions.length} color="sky" />

      {/* Question */}
      <AnimatePresence mode="wait">
        <motion.div
          key={qIndex}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          className="flex flex-col gap-5"
        >
          <div className="bg-gradient-to-br from-sky-900/40 to-blue-900/40 border border-sky-500/30 rounded-3xl p-8 flex flex-col items-center gap-4">
            {quizType === 'audio_to_kana' ? (
              <div className="flex flex-col items-center gap-3">
                <div className="text-5xl">🔊</div>
                <Button variant="glass" onClick={() => speak(current.correct.kana, { force: true })}>
                  <Volume2 size={20} className="inline mr-2" />Phát lại âm thanh
                </Button>
              </div>
            ) : quizType === 'kana_to_romaji' ? (
              <div className="text-8xl font-thin text-white" style={{ fontFamily: 'serif' }}>
                {current.correct.kana}
              </div>
            ) : (
              <div className="text-4xl font-bold text-white">{current.correct.romaji}</div>
            )}
            <p className="text-white/40 text-sm">
              {quizType === 'kana_to_romaji' ? 'Romaji của ký tự này là gì?' :
               quizType === 'romaji_to_kana' ? 'Ký tự nào tương ứng?' :
               'Ký tự nào được phát âm?'}
            </p>
          </div>

          {/* Choices */}
          <div className="grid grid-cols-2 gap-3">
            {current.choices.map((choice) => (
              <motion.button
                key={choice.id}
                whileHover={!selected ? { scale: 1.03 } : {}}
                whileTap={!selected ? { scale: 0.97 } : {}}
                onClick={() => handleSelect(choice)}
                className={clsx(
                  'rounded-2xl border p-4 font-bold text-center transition-all duration-200',
                  getChoiceStyle(choice)
                )}
              >
                <div className="flex flex-col items-center gap-1">
                  {quizType === 'kana_to_romaji' ? (
                    <span className="text-xl font-semibold">{choice.romaji}</span>
                  ) : (
                    <span className="text-3xl font-thin" style={{ fontFamily: 'serif' }}>
                      {choice.kana}
                    </span>
                  )}
                  {selected && choice.id === current.correct.id && (
                    <CheckCircle2 size={16} className="text-emerald-400" />
                  )}
                  {selected && choice.id === selected.id && choice.id !== current.correct.id && (
                    <XCircle size={16} className="text-rose-400" />
                  )}
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
