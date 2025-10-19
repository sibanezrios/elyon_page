'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function FAQ() {
  const t = useTranslations('faq');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { key: 'q1', question: t('q1.question'), answer: t('q1.answer') },
    { key: 'q2', question: t('q2.question'), answer: t('q2.answer') },
    { key: 'q3', question: t('q3.question'), answer: t('q3.answer') },
    { key: 'q4', question: t('q4.question'), answer: t('q4.answer') },
  ];

  return (
    <div className="max-w-3xl mx-auto">
      <div className="space-y-3 md:space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={faq.key}
            className="bg-black/30 rounded-lg shadow-lg overflow-hidden border border-brand-500/30 backdrop-blur-sm hover:border-brand-500/60 transition-colors"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-4 sm:p-5 md:p-6 text-left hover:bg-gray-800/50 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-inset"
              aria-expanded={openIndex === index}
            >
              <span className="text-base sm:text-lg md:text-lg font-semibold text-white pr-6 sm:pr-8">
                {faq.question}
              </span>
              {openIndex === index ? (
                <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-brand-400 flex-shrink-0" />
              ) : (
                <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 flex-shrink-0" />
              )}
            </button>
            
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6 text-sm sm:text-base md:text-base text-gray-400 leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
