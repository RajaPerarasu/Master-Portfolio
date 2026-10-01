import React, { useEffect, useState } from 'react';
import { motion, Variants } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorVariant, setCursorVariant] = useState<'default' | 'hover' | 'projectCard'>('default');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const projectCard = target.closest('[data-cursor="project"]');
      const clickable = target.closest('button, a, input, [data-cursor="hover"]');

      if (projectCard) {
        setCursorVariant('projectCard');
      } else if (clickable) {
        setCursorVariant('hover');
      } else {
        setCursorVariant('default');
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  if (isMobile) return null;

  const variants: Variants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      height: 16,
      width: 16,
      backgroundColor: '#00f2fe',
      boxShadow: '0 0 12px #00f2fe',
      mixBlendMode: 'difference',
      transition: { type: 'spring', stiffness: 800, damping: 40 },
    },
    hover: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      height: 48,
      width: 48,
      backgroundColor: 'rgba(56, 189, 248, 0.2)',
      border: '1px solid #38bdf8',
      boxShadow: '0 0 20px rgba(56, 189, 248, 0.4)',
      transition: { type: 'spring', stiffness: 500, damping: 30 },
    },
    projectCard: {
      x: mousePosition.x - 50,
      y: mousePosition.y - 50,
      height: 100,
      width: 100,
      backgroundColor: 'rgba(6, 182, 212, 0.9)',
      boxShadow: '0 0 25px rgba(6, 182, 212, 0.6)',
      transition: { type: 'spring', stiffness: 400, damping: 25 },
    },
  };

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 rounded-full flex items-center justify-center text-center overflow-hidden"
      variants={variants}
      animate={cursorVariant}
    >
      {cursorVariant === 'projectCard' && (
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-[11px] font-bold tracking-wider text-slate-950 uppercase font-mono px-2 leading-tight select-none"
        >
          VIEW PROJECT →
        </motion.span>
      )}
    </motion.div>
  );
};
