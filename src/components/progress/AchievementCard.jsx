import { motion } from 'framer-motion';
import { clsx } from 'clsx';

export const ACHIEVEMENTS = {
  streak_3:    { icon: '🔥', title: '3 Days Streak', desc: 'Học 3 ngày liên tiếp', color: 'amber' },
  streak_7:    { icon: '⚡', title: 'Weekly Warrior', desc: 'Học 7 ngày liên tiếp', color: 'violet' },
  streak_30:   { icon: '👑', title: 'Monthly Master', desc: 'Học 30 ngày liên tiếp', color: 'amber' },
  learn_10:    { icon: '🌱', title: 'First Steps', desc: 'Học 10 ký tự đầu tiên', color: 'emerald' },
  learn_46:    { icon: '🌸', title: 'Hiragana Complete', desc: 'Học hết hiragana cơ bản', color: 'fuchsia' },
  perfect_10:  { icon: '💯', title: 'Perfect Ten', desc: 'Đúng 10 câu liên tiếp', color: 'sky' },
  quiz_master: { icon: '🧠', title: 'Quiz Master', desc: 'Hoàn thành 50 quiz', color: 'violet' },
};

const colors = {
  amber:   'from-amber-500/20 to-orange-500/20 border-amber-500/30',
  violet:  'from-violet-500/20 to-fuchsia-500/20 border-violet-500/30',
  emerald: 'from-emerald-500/20 to-teal-500/20 border-emerald-500/30',
  fuchsia: 'from-fuchsia-500/20 to-pink-500/20 border-fuchsia-500/30',
  sky:     'from-sky-500/20 to-blue-500/20 border-sky-500/30',
};

export default function AchievementCard({ id, unlocked, index = 0 }) {
  const achievement = ACHIEVEMENTS[id];
  if (!achievement) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05 }}
      className={clsx(
        'bg-gradient-to-br border rounded-2xl p-4 flex items-center gap-3 transition-all duration-300',
        unlocked ? colors[achievement.color] : 'from-white/5 to-white/5 border-white/10 opacity-50 grayscale'
      )}
    >
      <span className="text-3xl">{achievement.icon}</span>
      <div>
        <div className="font-bold text-sm text-white">{achievement.title}</div>
        <div className="text-xs text-white/50">{achievement.desc}</div>
        {!unlocked && <div className="text-xs text-white/30 mt-0.5">🔒 Chưa mở khóa</div>}
      </div>
    </motion.div>
  );
}
