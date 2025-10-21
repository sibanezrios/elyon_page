'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { analytics } from '@/lib/utils';

export function Hero() {
  const t = useTranslations();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Get rotating texts from i18n
  const rotatingTexts = [
    t('hero.new.rotatingTexts.0'),
    t('hero.new.rotatingTexts.1'),
    t('hero.new.rotatingTexts.2'),
    t('hero.new.rotatingTexts.3'),
    t('hero.new.rotatingTexts.4'),
  ];

  // Auto-rotate every 3 seconds
  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 2900);

    return () => clearInterval(interval);
  }, [isAutoPlay, rotatingTexts.length]);

  const handlePrev = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prev) => (prev - 1 + rotatingTexts.length) % rotatingTexts.length);
  };

  const handleNext = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prev) => (prev + 1) % rotatingTexts.length);
  };

  const handleDotClick = (index: number) => {
    setIsAutoPlay(false);
    setCurrentIndex(index);
  };

  const handleDemoClick = () => {
    analytics.track('hero_demo_click', { 
      page: '/',
      section: 'hero' 
    });
    const demosSection = document.getElementById('demos');
    if (demosSection) {
      demosSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative overflow-hidden text-white min-h-[85vh] sm:min-h-[90vh] flex items-center">
      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 md:px-12 lg:px-[60px] py-12 sm:py-16 md:py-20" style={{ maxWidth: '1100px' }}>
        <div className="text-center">
          {/* Main title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-4 sm:mb-6"
          >
            {t('hero.new.mainTitle')}
          </motion.h1>

          {/* Rotating text container */}
          <div className="relative h-16 sm:h-20 md:h-24 flex items-center justify-center mb-6 sm:mb-8 md:mb-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-400 px-4">
                  {rotatingTexts[currentIndex]}
                </span>
              </motion.div>
            </AnimatePresence>

            {/* Navigation arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-0 sm:left-4 md:left-8 p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors z-10"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-0 sm:right-4 md:right-8 p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors z-10"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </button>
          </div>

          {/* Dot indicators */}
          <div className="flex items-center justify-center gap-2 mb-6 sm:mb-8 md:mb-10">
            {rotatingTexts.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-brand-400 w-8'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Ir a frase ${index + 1}`}
              />
            ))}
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-[850px] mx-auto mb-8 sm:mb-10 md:mb-12 px-4"
          >
            {t('hero.new.subtitle')}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <button
              onClick={handleDemoClick}
              type="button"
              className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-lg transition-all duration-300 text-base sm:text-lg shadow-2xl hover:shadow-brand-500/50 hover:scale-105 cursor-pointer"
            >
              <span>{t('hero.new.ctaDemo')}</span>
              <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Decorative gradient orbs (non-interactive) */}
      <div className="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-blob z-0" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-400 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-blob animation-delay-2000 z-0" />
    </section>
  );
}