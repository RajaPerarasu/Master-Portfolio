import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxModalProps {
  isOpen: boolean;
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNavigate?: (index: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  images,
  currentIndex,
  onClose,
  onNavigate,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && onNavigate && currentIndex > 0) {
        onNavigate(currentIndex - 1);
      }
      if (e.key === 'ArrowRight' && onNavigate && currentIndex < images.length - 1) {
        onNavigate(currentIndex + 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, images.length, onClose, onNavigate]);

  if (!isOpen || images.length === 0) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative max-w-6xl w-full max-h-[90vh] flex flex-col items-center justify-center"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute -top-12 right-0 p-2 rounded-full bg-slate-900/80 border border-white/20 text-slate-300 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Current Image */}
          <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl bg-slate-950 flex items-center justify-center max-h-[80vh]">
            <img
              src={images[currentIndex]}
              alt={`Screenshot ${currentIndex + 1}`}
              className="object-contain max-h-[80vh] w-auto"
            />
          </div>

          {/* Navigation Controls */}
          {images.length > 1 && onNavigate && (
            <>
              {currentIndex > 0 && (
                <button
                  onClick={() => onNavigate(currentIndex - 1)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/80 border border-white/20 text-white hover:bg-cyan-500 hover:text-black transition-all"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
              )}
              {currentIndex < images.length - 1 && (
                <button
                  onClick={() => onNavigate(currentIndex + 1)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/80 border border-white/20 text-white hover:bg-cyan-500 hover:text-black transition-all"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              )}
            </>
          )}

          {/* Index Indicator */}
          <div className="mt-4 text-xs font-mono text-slate-400">
            {currentIndex + 1} / {images.length}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
