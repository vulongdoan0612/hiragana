import { motion } from 'framer-motion';
import { clsx } from 'clsx';

export default function StatCard({ icon, label, value, color = 'violet', className }) {
  const colors = {
    violet: 'from-violet-500/20 to-fuchsia-500/20 border-violet-500/30',
    emerald: 'from-emerald-500/20 to-teal-500/20 border-emerald-500/30',
    amber: 'from-amber-500/20 to-orange-500/20 border-amber-500/30',
    rose: 'from-rose-500/20 to-pink-500/20 border-rose-500/30',
    sky: 'from-sky-500/20 to-blue-500/20 border-sky-500/30',
  };

  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -2 }}
      className={clsx(
        'bg-gradient-to-br border rounded-2xl p-4 backdrop-blur-sm',
        colors[color], className
      )}
    >
      <div className="text-2xl mb-1">{icon}</div>
      <div className="text-2xl font-bold text-white">{value}</div>
      <div className="text-xs text-white/60 mt-0.5">{label}</div>
    </motion.div>
  );
}
