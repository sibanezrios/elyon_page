'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/site.config';
import { analytics } from '@/lib/utils';

export function Hero() {
  const t = useTranslations();
  const locale = useLocale();

  const handleWhatsAppClick = () => {
    analytics.track('cta_whatsapp_click', { 
      page: '/',
      section: 'hero' 
    });
  };

  return (
    <section className="relative overflow-hidden text-white">
      <div className="mx-auto px-4 sm:px-8 md:px-12 lg:px-[60px] py-20 sm:py-28 md:py-[140px]" style={{ maxWidth: '1000px' }}>
        <div className="text-center">
          {/* Nombre del negocio - ELYON Business Consulting */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl sm:text-6xl md:text-[64px] font-extrabold text-white leading-tight tracking-tight"
          >
            {t('hero.brand')}
          </motion.h1>

          {/* Subtítulo principal */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl sm:text-2xl md:text-[28px] font-light text-gray-300 mt-6 sm:mt-8 md:mt-10 leading-relaxed text-balance max-w-[800px] mx-auto"
          >
            {t('hero.subtitle')}
          </motion.h2>

          {/* CTA principal único */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 md:mt-16"
          >
            <a
              href={`/${locale}/contacto`}
              className="inline-flex items-center space-x-3 px-10 py-5 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 text-lg shadow-2xl hover:shadow-white/20 hover:scale-105"
            >
              <span>{t('hero.cta')}</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Decorative gradient orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-blob" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-400 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
    </section>
  );
}
