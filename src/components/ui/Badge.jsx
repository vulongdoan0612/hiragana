import { clsx } from 'clsx';

const variants = {
  violet: 'bg-violet-500/20 text-violet-300 border-violet-500/30',
  emerald: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
  amber: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
  rose: 'bg-rose-500/20 text-rose-300 border-rose-500/30',
  sky: 'bg-sky-500/20 text-sky-300 border-sky-500/30',
  fuchsia: 'bg-fuchsia-500/20 text-fuchsia-300 border-fuchsia-500/30',
};

export default function Badge({ children, variant = 'violet', className }) {
  return (
    <span className={clsx(
      'inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium border',
      variants[variant], className
    )}>
      {children}
    </span>
  );
}
