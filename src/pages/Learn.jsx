import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shuffle, RotateCcw, Filter, BookOpen, PenLine } from 'lucide-react';
import FlashCard from '../components/flashcard/FlashCard';
import Button from '../components/ui/Button';
import ProgressBar from '../components/ui/ProgressBar';
import { hiraganaData, groupLabels, GROUPS, ROW_LABELS, BASIC_ROWS } from '../data/hiragana';
import { useProgressStore } from '../store/useProgressStore';
import { shuffle } from '../utils/spaced-repetition';

const GROUP_KEYS = Object.keys(GROUPS);

export default function Learn() {
  const [mode, setMode] = useState('normal'); // 'normal' | 'practice'
  const [selectedGroups, setSelectedGroups] = useState(['basic']);
  const [selectedRows, setSelectedRows] = useState([]);
  const [cards, setCards] = useState(() =>
    hiraganaData.filter((c) => c.group === 'basic')
  );
  const [index, setIndex] = useState(0);
  const [showFilter, setShowFilter] = useState(false);
  const [isShuffled, setIsShuffled] = useState(false);
  const updateStreak = useProgressStore((s) => s.updateStreak);

  const getFilteredCards = useCallback((groups, rows) =>
    hiraganaData.filter((c) => {
      if (!groups.includes(c.group)) return false;
      if (c.group === GROUPS.BASIC && rows.length > 0) return rows.includes(c.row);
      return true;
    }), []);

  const toggleGroup = (group) => {
    const next = selectedGroups.includes(group)
      ? selectedGroups.filter((g) => g !== group)
      : [...selectedGroups, group];
    if (!next.length) return;
    const nextRows = next.includes(GROUPS.BASIC) ? selectedRows : [];
    setSelectedGroups(next);
    setSelectedRows(nextRows);
    const filtered = getFilteredCards(next, nextRows);
    setCards(isShuffled ? shuffle(filtered) : filtered);
    setIndex(0);
  };

  const toggleRow = (row) => {
    const next = selectedRows.includes(row)
      ? selectedRows.filter((r) => r !== row)
      : [...selectedRows, row];
    setSelectedRows(next);
    const filtered = getFilteredCards(selectedGroups, next);
    setCards(isShuffled ? shuffle(filtered) : filtered);
    setIndex(0);
  };

  const clearRows = () => {
    setSelectedRows([]);
    const filtered = getFilteredCards(selectedGroups, []);
    setCards(isShuffled ? shuffle(filtered) : filtered);
    setIndex(0);
  };

  const handleShuffle = () => {
    setCards((prev) => shuffle(prev));
    setIndex(0);
    setIsShuffled(true);
  };

  const handleReset = () => {
    const filtered = getFilteredCards(selectedGroups, selectedRows);
    setCards(filtered);
    setIndex(0);
    setIsShuffled(false);
  };

  const goNext = () => {
    if (index < cards.length - 1) {
      setIndex((i) => i + 1);
    } else {
      updateStreak();
      setIndex(0);
    }
  };
  const goPrev = () => setIndex((i) => Math.max(0, i - 1));

  useEffect(() => {
    const onKey = (e) => {
      if (e.code === 'ArrowRight') goNext();
      if (e.code === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [index, cards.length]);

  const card = cards[index];

  return (
    <div className="py-6 flex flex-col gap-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">📖 Learn Mode</h1>
          <p className="text-white/40 text-sm mt-0.5">Thẻ {index + 1}/{cards.length}</p>
        </div>
        <div className="flex gap-2 items-center">
          {/* Mode toggle */}
          <div className="flex bg-white/10 rounded-xl p-1 gap-0.5">
            <button
              onClick={() => setMode('normal')}
              title="Chế độ học"
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                mode === 'normal'
                  ? 'bg-violet-500 text-white shadow'
                  : 'text-white/40 hover:text-white/70'
              }`}
            >
              <BookOpen size={13} />
              Học
            </button>
            <button
              onClick={() => setMode('practice')}
              title="Chế độ luyện viết"
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                mode === 'practice'
                  ? 'bg-indigo-500 text-white shadow'
                  : 'text-white/40 hover:text-white/70'
              }`}
            >
              <PenLine size={13} />
              Viết
            </button>
          </div>

          <Button variant="glass" size="icon" onClick={handleShuffle} title="Xáo bài">
            <Shuffle size={16} />
          </Button>
          <Button variant="glass" size="icon" onClick={handleReset} title="Reset">
            <RotateCcw size={16} />
          </Button>
          <Button
            variant={showFilter ? 'primary' : 'glass'} size="icon"
            onClick={() => setShowFilter((s) => !s)}
          >
            <Filter size={16} />
          </Button>
        </div>
      </div>

      {/* Progress bar */}
      <ProgressBar value={index + 1} max={cards.length} color="violet" />

      {/* Filter panel */}
      <AnimatePresence>
        {showFilter && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-4 overflow-hidden flex flex-col gap-4"
          >
            {/* Group filter */}
            <div>
              <p className="text-xs text-white/40 mb-3 uppercase tracking-wider">Nhóm ký tự</p>
              <div className="flex flex-wrap gap-2">
                {GROUP_KEYS.map((key) => {
                  const active = selectedGroups.includes(GROUPS[key]);
                  const count = hiraganaData.filter((c) => c.group === GROUPS[key]).length;
                  return (
                    <button
                      key={key}
                      onClick={() => toggleGroup(GROUPS[key])}
                      className={`px-3 py-1.5 rounded-xl text-sm font-medium transition-all ${
                        active
                          ? 'bg-violet-500 text-white'
                          : 'bg-white/10 text-white/60 hover:bg-white/20'
                      }`}
                    >
                      {groupLabels[GROUPS[key]]} ({count})
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Row sub-filter — only when basic is selected */}
            <AnimatePresence>
              {selectedGroups.includes(GROUPS.BASIC) && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-xs text-white/40 uppercase tracking-wider">Hàng cơ bản</p>
                    {selectedRows.length > 0 && (
                      <button
                        onClick={clearRows}
                        className="text-xs text-white/30 hover:text-white/60 transition-colors"
                      >
                        Bỏ chọn tất cả
                      </button>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {BASIC_ROWS.map((row) => {
                      const active = selectedRows.includes(row);
                      const count = hiraganaData.filter((c) => c.group === 'basic' && c.row === row).length;
                      return (
                        <button
                          key={row}
                          onClick={() => toggleRow(row)}
                          className={`px-3 py-1.5 rounded-xl text-sm font-medium transition-all ${
                            active
                              ? 'bg-emerald-500 text-white'
                              : 'bg-white/10 text-white/60 hover:bg-white/20'
                          }`}
                        >
                          {ROW_LABELS[row]} ({count})
                        </button>
                      );
                    })}
                  </div>
                  {selectedRows.length === 0 && (
                    <p className="text-xs text-white/20 mt-2">Không chọn = hiển thị tất cả hàng</p>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Flashcard */}
      <AnimatePresence mode="wait">
        <motion.div
          key={card.id}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ type: 'spring', stiffness: 400, damping: 35 }}
        >
          <FlashCard
            card={card}
            onNext={goNext}
            onPrev={goPrev}
            showNav={true}
            mode={mode}
          />
        </motion.div>
      </AnimatePresence>

      {/* Keyboard hint */}
      <p className="text-center text-white/20 text-xs">← → để chuyển · Space để lật thẻ</p>
    </div>
  );
}
