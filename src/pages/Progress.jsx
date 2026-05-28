import { motion } from 'framer-motion';
import { Trophy, Flame, Zap, BookOpen, Target, TrendingUp } from 'lucide-react';
import { useProgressStore } from '../store/useProgressStore';
import { hiraganaData, groupLabels, GROUPS } from '../data/hiragana';
import ProgressBar from '../components/ui/ProgressBar';
import StatCard from '../components/ui/StatCard';
import AchievementCard, { ACHIEVEMENTS } from '../components/progress/AchievementCard';

export default function Progress() {
  const { streak, totalXP, level, learnedCards, achievements, dailyProgress, dailyGoal } = useProgressStore();

  const learned = Object.keys(learnedCards).length;
  const totalCards = hiraganaData.length;
  const totalCorrect = Object.values(learnedCards).reduce((sum, c) => sum + (c.correct || 0), 0);
  const totalWrong = Object.values(learnedCards).reduce((sum, c) => sum + (c.wrong || 0), 0);
  const accuracy = totalCorrect + totalWrong > 0
    ? Math.round((totalCorrect / (totalCorrect + totalWrong)) * 100) : 0;

  const difficultCards = Object.entries(learnedCards)
    .filter(([, v]) => (v.difficulty || 0) >= 2)
    .sort(([, a], [, b]) => (b.difficulty || 0) - (a.difficulty || 0))
    .slice(0, 5)
    .map(([id]) => hiraganaData.find((c) => c.id === id))
    .filter(Boolean);

  return (
    <div className="py-6 flex flex-col gap-6">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl font-bold text-white">📊 Tiến Độ</h1>
        <p className="text-white/40 text-sm mt-0.5">Hành trình học Hiragana của bạn</p>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-3">
        <StatCard icon={<Flame size={20} className="text-amber-400" />} label="Streak" value={`${streak} ngày`} color="amber" />
        <StatCard icon={<Zap size={20} className="text-violet-400" />} label="Tổng XP" value={totalXP} color="violet" />
        <StatCard icon={<BookOpen size={20} className="text-emerald-400" />} label="Đã học" value={`${learned}/${totalCards}`} color="emerald" />
        <StatCard icon={<TrendingUp size={20} className="text-sky-400" />} label="Chính xác" value={`${accuracy}%`} color="sky" />
      </div>

      {/* Daily goal */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
        <div className="flex items-center gap-2 mb-3">
          <Target size={16} className="text-emerald-400" />
          <span className="text-sm font-semibold text-white">Mục tiêu hôm nay</span>
        </div>
        <ProgressBar value={dailyProgress} max={dailyGoal} color="emerald" label={`${dailyProgress}/${dailyGoal} thẻ`} />
      </div>

      {/* Level */}
      <div className="bg-gradient-to-br from-violet-900/40 to-fuchsia-900/40 border border-violet-500/30 rounded-2xl p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="font-bold text-white">Level {level}</span>
          <span className="text-white/50 text-sm">{totalXP % 200}/200 XP</span>
        </div>
        <ProgressBar value={totalXP % 200} max={200} color="violet" />
      </div>

      {/* Per group */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
        <h3 className="text-sm font-semibold text-white mb-4">Tiến độ theo nhóm</h3>
        {Object.values(GROUPS).map((group) => {
          const groupCards = hiraganaData.filter((c) => c.group === group);
          const groupLearned = groupCards.filter((c) => learnedCards[c.id]).length;
          return (
            <div key={group} className="mb-4 last:mb-0">
              <ProgressBar
                value={groupLearned}
                max={groupCards.length}
                color={group === 'basic' ? 'violet' : group === 'dakuten' ? 'sky' : group === 'handakuten' ? 'amber' : 'emerald'}
                label={groupLabels[group]}
              />
            </div>
          );
        })}
      </div>

      {/* Difficult cards */}
      {difficultCards.length > 0 && (
        <div className="bg-rose-500/10 border border-rose-500/20 rounded-2xl p-4">
          <h3 className="text-sm font-semibold text-rose-300 mb-3">⚠️ Cần ôn lại</h3>
          <div className="flex flex-wrap gap-2">
            {difficultCards.map((card) => (
              <div key={card.id} className="flex flex-col items-center bg-white/5 rounded-xl px-3 py-2">
                <span className="text-2xl font-thin text-white" style={{ fontFamily: 'serif' }}>
                  {card.kana}
                </span>
                <span className="text-xs text-white/50">{card.romaji}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Achievements */}
      <div>
        <h3 className="text-sm font-semibold text-white mb-3">🏆 Thành Tích</h3>
        <div className="flex flex-col gap-2">
          {Object.keys(ACHIEVEMENTS).map((id, i) => (
            <AchievementCard key={id} id={id} unlocked={achievements.includes(id)} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
