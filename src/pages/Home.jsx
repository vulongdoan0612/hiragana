import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, Brain, Gamepad2, BarChart3, Flame, Star, Zap, Target } from 'lucide-react';
import { useProgressStore } from '../store/useProgressStore';
import { characterOfTheDay, hiraganaData, groupLabels } from '../data/hiragana';
import ProgressBar from '../components/ui/ProgressBar';
import StatCard from '../components/ui/StatCard';

const cards = [
  { to: '/learn', icon: BookOpen, label: 'Learn Mode', desc: 'Học flashcard có mnemonic', color: 'from-violet-500 to-fuchsia-500', bg: 'from-violet-500/20 to-fuchsia-500/20 border-violet-500/30' },
  { to: '/quiz', icon: Brain, label: 'Quiz Mode', desc: 'Kiểm tra kiến thức', color: 'from-sky-400 to-blue-500', bg: 'from-sky-500/20 to-blue-500/20 border-sky-500/30' },
  { to: '/game', icon: Gamepad2, label: 'Memory Game', desc: 'Ghép cặp ký tự', color: 'from-emerald-400 to-teal-500', bg: 'from-emerald-500/20 to-teal-500/20 border-emerald-500/30' },
  { to: '/progress', icon: BarChart3, label: 'Tiến độ', desc: 'Xem thống kê của bạn', color: 'from-amber-400 to-orange-500', bg: 'from-amber-500/20 to-orange-500/20 border-amber-500/30' },
];

export default function Home() {
  const { streak, totalXP, level, dailyProgress, dailyGoal } = useProgressStore();
  const learned = useProgressStore((s) => Object.keys(s.learnedCards).length);
  const cotd = characterOfTheDay();
  const xpToNext = (level * 200) - totalXP;

  return (
    <div className="py-6 flex flex-col gap-6">
      {/* Welcome */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-bold text-white">
          こんにちは! 👋
        </h1>
        <p className="text-white/50 mt-1">Hãy học Hiragana hôm nay nhé!</p>
      </motion.div>

      {/* Stats Row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        className="grid grid-cols-2 gap-3"
      >
        <StatCard icon={<Flame size={20} className="text-amber-400" />} label="Ngày liên tiếp" value={streak} color="amber" />
        <StatCard icon={<Zap size={20} className="text-violet-400" />} label="Tổng XP" value={totalXP} color="violet" />
        <StatCard icon={<Star size={20} className="text-sky-400" />} label="Cấp độ" value={`Lv.${level}`} color="sky" />
        <StatCard icon={<BookOpen size={20} className="text-emerald-400" />} label="Đã học" value={`${learned}/${hiraganaData.length}`} color="emerald" />
      </motion.div>

      {/* Daily Goal */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
        className="bg-white/5 border border-white/10 rounded-2xl p-4"
      >
        <div className="flex items-center gap-2 mb-3">
          <Target size={16} className="text-emerald-400" />
          <span className="text-sm font-semibold text-white">Mục tiêu hôm nay</span>
          <span className="ml-auto text-xs text-white/40">{dailyProgress}/{dailyGoal}</span>
        </div>
        <ProgressBar value={dailyProgress} max={dailyGoal} color="emerald" />
        {dailyProgress >= dailyGoal && (
          <p className="text-emerald-400 text-xs mt-2 font-medium">✓ Hoàn thành mục tiêu hôm nay! 🎉</p>
        )}
      </motion.div>

      {/* XP to next level */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
        className="bg-white/5 border border-white/10 rounded-2xl p-4"
      >
        <div className="flex items-center gap-2 mb-3">
          <Zap size={16} className="text-violet-400" />
          <span className="text-sm font-semibold text-white">Level {level} → {level + 1}</span>
          <span className="ml-auto text-xs text-white/40">còn {xpToNext} XP</span>
        </div>
        <ProgressBar value={totalXP % 200} max={200} color="violet" />
      </motion.div>

      {/* Character of the Day */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
        className="bg-gradient-to-br from-fuchsia-900/40 to-violet-900/40 border border-fuchsia-500/30 rounded-2xl p-5"
      >
        <div className="text-xs text-fuchsia-400 font-semibold uppercase tracking-widest mb-3">
          ✨ Ký tự hôm nay
        </div>
        <div className="flex items-center gap-4">
          <div className="text-6xl font-thin text-white" style={{ fontFamily: 'serif' }}>
            {cotd.kana}
          </div>
          <div className="flex-1">
            <div className="text-xl font-bold text-fuchsia-300">{cotd.romaji}</div>
            <div className="text-white/50 text-sm mt-1">{cotd.mnemonic}</div>
            <div className="flex gap-2 mt-2 flex-wrap">
              {cotd.examples.slice(0, 1).map((ex) => (
                <div key={ex.word} className="text-xs bg-white/10 rounded-lg px-2 py-1">
                  <span className="text-white">{ex.word}</span>
                  <span className="text-white/40"> · {ex.meaning}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="text-4xl">{cotd.emoji}</div>
        </div>
      </motion.div>

      {/* Mode Cards */}
      <div className="grid grid-cols-2 gap-3">
        {cards.map(({ to, icon: Icon, label, desc, color, bg }, i) => (
          <motion.div
            key={to}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 + i * 0.05 }}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <Link
              to={to}
              className={`bg-gradient-to-br border rounded-2xl p-4 flex flex-col gap-2 block ${bg}`}
            >
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center`}>
                <Icon size={20} className="text-white" />
              </div>
              <div className="font-bold text-white text-sm">{label}</div>
              <div className="text-white/50 text-xs leading-tight">{desc}</div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Group overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
        className="bg-white/5 border border-white/10 rounded-2xl p-4"
      >
        <h3 className="text-sm font-semibold text-white mb-3">📚 Nội dung học</h3>
        {Object.entries(groupLabels).map(([key, label]) => {
          const total = hiraganaData.filter((h) => h.group === key).length;
          return (
            <div key={key} className="flex items-center justify-between py-1.5 border-b border-white/5 last:border-0">
              <span className="text-white/70 text-sm">{label}</span>
              <span className="text-white/40 text-xs">{total} ký tự</span>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
