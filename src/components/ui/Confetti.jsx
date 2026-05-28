import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const COLORS = ['#a855f7', '#ec4899', '#22d3ee', '#34d399', '#fbbf24', '#f87171'];

function Particle({ x, color }) {
  const vy = -(Math.random() * 300 + 200);
  const vx = (Math.random() - 0.5) * 400;
  const rotation = Math.random() * 720 - 360;

  return (
    <motion.div
      className="absolute w-3 h-3 rounded-sm pointer-events-none"
      style={{ left: x, top: '50%', backgroundColor: color }}
      initial={{ y: 0, x: 0, opacity: 1, rotate: 0, scale: 1 }}
      animate={{
        y: [0, vy * 0.5, vy],
        x: [0, vx * 0.5, vx],
        opacity: [1, 1, 0],
        rotate: rotation,
        scale: [1, 1, 0],
      }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
    />
  );
}

export default function Confetti({ active }) {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: `${Math.random() * 100}%`,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
  }));

  return (
    <AnimatePresence>
      {active && (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
          {particles.map((p) => (
            <Particle key={p.id} x={p.x} color={p.color} />
          ))}
        </div>
      )}
    </AnimatePresence>
  );
}
