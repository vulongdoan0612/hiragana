import { Link } from 'react-router-dom';
import { Flame, Zap, Star } from 'lucide-react';
import { useProgressStore } from '../../store/useProgressStore';

export default function Navbar() {
  const { streak, totalXP, level } = useProgressStore();

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-slate-950/70 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-2xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl">🌸</span>
          <span className="font-bold text-lg bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
            HiraLearn
          </span>
        </Link>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 bg-amber-500/20 border border-amber-500/30 rounded-full px-2.5 py-1">
            <Flame size={14} className="text-amber-400" />
            <span className="text-amber-300 text-sm font-bold">{streak}</span>
          </div>
          <div className="flex items-center gap-1 bg-violet-500/20 border border-violet-500/30 rounded-full px-2.5 py-1">
            <Zap size={14} className="text-violet-400" />
            <span className="text-violet-300 text-sm font-bold">{totalXP}</span>
          </div>
          <div className="flex items-center gap-1 bg-sky-500/20 border border-sky-500/30 rounded-full px-2.5 py-1">
            <Star size={14} className="text-sky-400" />
            <span className="text-sky-300 text-sm font-bold">Lv.{level}</span>
          </div>
        </div>
      </div>
    </header>
  );
}
