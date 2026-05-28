import { motion } from 'framer-motion';
import { clsx } from 'clsx';

export default function ProgressBar({ value = 0, max = 100, color = 'violet', label, className }) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100));

  const colors = {
    violet: 'from-violet-500 to-fuchsia-500',
    emerald: 'from-emerald-400 to-teal-500',
    amber: 'from-amber-400 to-orange-500',
    rose: 'from-rose-400 to-pink-500',
    sky: 'from-sky-400 to-blue-500',
  };

  return (
    <div className={clsx('w-full', className)}>
      {label && (
        <div className="flex justify-between text-xs text-white/60 mb-1">
          <span>{label}</span>
          <span>{value}/{max}</span>
        </div>
      )}
      <div className="h-2.5 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className={clsx('h-full rounded-full bg-gradient-to-r', colors[color])}
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}
