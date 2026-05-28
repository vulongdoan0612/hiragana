import { motion } from 'framer-motion';
import { clsx } from 'clsx';

const variants = {
  primary: 'bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50',
  secondary: 'bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-sm',
  success: 'bg-gradient-to-r from-emerald-400 to-teal-500 text-white shadow-lg shadow-emerald-500/30',
  danger: 'bg-gradient-to-r from-rose-400 to-pink-500 text-white shadow-lg shadow-rose-500/30',
  ghost: 'bg-transparent text-white/70 hover:text-white hover:bg-white/10',
  glass: 'bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20',
};

const sizes = {
  sm: 'px-3 py-1.5 text-sm rounded-lg',
  md: 'px-5 py-2.5 text-base rounded-xl',
  lg: 'px-7 py-3.5 text-lg rounded-2xl',
  icon: 'p-2.5 rounded-xl',
};

export default function Button({
  children, variant = 'primary', size = 'md',
  className, disabled, onClick, ...props
}) {
  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.03 }}
      whileTap={{ scale: disabled ? 1 : 0.97 }}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        'font-semibold transition-all duration-200 cursor-pointer select-none',
        'disabled:opacity-40 disabled:cursor-not-allowed',
        variants[variant], sizes[size], className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}
