'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { analytics } from '@/lib/utils';

export function WelcomeScreen() {
  const t = useTranslations('welcome');
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = (action: 'conocenos' | 'demos') => {
    setIsVisible(false);
    
    analytics.track('welcome_screen_action', { action });
    
    setTimeout(() => {
      const targetId = action === 'conocenos' ? 'offerings' : 'demos';
      const element = document.getElementById(targetId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      handleClose('conocenos');
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="welcome-title"
          onKeyDown={handleKeyDown}
        >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="max-w-4xl text-center"
            >
    
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              id="welcome-title"
              className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-300 mb-12 text-balance max-w-2xl mx-auto"
            >
              {t('title')}
            </motion.h1>                        
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <button
                onClick={() => handleClose('conocenos')}
                className="px-8 py-4 bg-brand-500 text-white font-semibold rounded-lg hover:bg-brand-600 transition-colors text-lg min-w-[200px] focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-black"
              >
                {t('primary')}
              </button>
              
              <button
                onClick={() => handleClose('demos')}
                className="px-8 py-4 bg-transparent border-2 border-brand-500 text-brand-400 font-semibold rounded-lg hover:bg-brand-500 hover:text-white transition-colors text-lg min-w-[200px] focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-black"
              >
                {t('secondary')}
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
