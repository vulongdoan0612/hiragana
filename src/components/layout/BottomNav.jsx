import { NavLink } from 'react-router-dom';
import { Home, BookOpen, Brain, Gamepad2, BarChart3, Settings } from 'lucide-react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';

const links = [
  { to: '/', icon: Home, label: 'Home' },
  { to: '/learn', icon: BookOpen, label: 'Học' },
  { to: '/quiz', icon: Brain, label: 'Quiz' },
  { to: '/game', icon: Gamepad2, label: 'Game' },
  { to: '/progress', icon: BarChart3, label: 'Tiến độ' },
  { to: '/settings', icon: Settings, label: 'Cài đặt' },
];

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-slate-950/80 backdrop-blur-xl border-t border-white/5">
      <div className="max-w-2xl mx-auto px-2 flex items-center justify-around h-16">
        {links.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) => clsx(
              'flex flex-col items-center gap-0.5 px-2 py-1 rounded-xl transition-all duration-200 min-w-0',
              isActive ? 'text-violet-400' : 'text-white/40 hover:text-white/70'
            )}
          >
            {({ isActive }) => (
              <>
                <motion.div
                  animate={isActive ? { scale: 1.2, y: -2 } : { scale: 1, y: 0 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                >
                  <Icon size={20} />
                </motion.div>
                <span className="text-[10px] font-medium truncate">{label}</span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
