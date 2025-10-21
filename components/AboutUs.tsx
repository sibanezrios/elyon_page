'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useRouter } from '@/routing';
import { ArrowRight } from 'lucide-react';
import { analytics } from '@/lib/utils';

export function AboutUs() {
  const t = useTranslations();
  const router = useRouter();

  const handleContactClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    analytics.track('about_contact_click', { 
      page: '/',
      section: 'about' 
    });
    router.push('/contacto');
  };

  return (
    <section id="about" className="relative py-16 md:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contenido estilo hero original */}
        <div className="text-center">
          {/* Nombre del negocio - ELYON Business Consulting */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-extrabold text-white leading-tight tracking-tight"
          >
            {t('hero.brand')}
          </motion.h3>

          {/* Subtítulo principal */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl lg:text-[28px] font-light text-gray-300 mt-4 sm:mt-6 md:mt-8 lg:mt-10 leading-relaxed text-balance max-w-[800px] mx-auto"
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* CTA principal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 sm:mt-10 md:mt-12 lg:mt-16"
          >
            <button
              onClick={handleContactClick}
              type="button"
              className="inline-flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-3 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 text-base sm:text-lg shadow-2xl hover:shadow-white/20 hover:scale-105 cursor-pointer"
            >
              <span>{t('hero.cta')}</span>
              <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5" />
            </button>
          </motion.div>
        </div>

        {/* Separador sutil */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-800/30 to-transparent mt-12 md:mt-16" />
      </div>
    </section>
  );
}

