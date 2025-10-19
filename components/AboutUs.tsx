'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export function AboutUs() {
  const t = useTranslations();
  return (
    <section id="about" className="relative py-16 md:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Sección principal "Quiénes Somos" - Minimalista */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-24"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 md:mb-12 text-center">
            {t('about.title')}
          </h2>
          
          <div className="relative">
            {/* Fondo difuminado sutil */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-500/5 via-brand-400/5 to-transparent rounded-2xl blur-3xl" />
            
            {/* Contenido */}
            <div className="relative bg-transparent border border-gray-800/30 rounded-2xl p-6 sm:p-10 md:p-16 backdrop-blur-sm">
              <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed text-center">
                {t('about.description')}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Separador sutil */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-800/30 to-transparent mb-0" />
      </div>
    </section>
  );
}

