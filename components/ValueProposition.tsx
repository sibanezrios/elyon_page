'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Sparkles, TrendingUp, Target } from 'lucide-react';

export function ValueProposition() {
  const t = useTranslations();
  return (
    <section className="relative py-16 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Separador superior sutil */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-800/30 to-transparent mb-12 md:mb-20" />

        {/* Título principal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
            {t('valueProposition.intro')}<br />
            <span className="text-brand-400">{t('valueProposition.highlight')}</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            {t('valueProposition.description')}
          </p>
        </motion.div>

        {/* Grid de beneficios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group"
          >
            <div className="relative h-full overflow-hidden rounded-2xl">
              {/* Fondo difuminado sutil */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-500/3 via-transparent to-brand-400/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Contenido */}
              <div className="relative h-full bg-transparent border border-gray-800/30 rounded-2xl p-5 sm:p-6 md:p-8 backdrop-blur-sm hover:border-brand-500/30 transition-all duration-300">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-brand-500/5 rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:bg-brand-500/10 transition-colors border border-brand-500/20">
                  <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 text-brand-400" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">
                  {t('valueProposition.ai.title')}
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed">
                  {t('valueProposition.ai.description')}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group"
          >
            <div className="relative h-full overflow-hidden rounded-2xl">
              {/* Fondo difuminado sutil */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-500/3 via-transparent to-brand-400/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Contenido */}
              <div className="relative h-full bg-transparent border border-gray-800/30 rounded-2xl p-8 backdrop-blur-sm hover:border-brand-500/30 transition-all duration-300">
                <div className="w-14 h-14 bg-brand-500/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-500/10 transition-colors border border-brand-500/20">
                  <TrendingUp className="w-7 h-7 text-brand-400" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">
                  {t('valueProposition.automation.title')}
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed">
                  {t('valueProposition.automation.description')}
                </p>
              </div>
            </div>
          </motion.div>

                    {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group"
          >
            <div className="relative h-full overflow-hidden rounded-2xl">
              {/* Fondo difuminado sutil */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-500/3 via-transparent to-brand-400/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Contenido */}
              <div className="relative h-full bg-transparent border border-gray-800/30 rounded-2xl p-8 backdrop-blur-sm hover:border-brand-500/30 transition-all duration-300">
                <div className="w-14 h-14 bg-brand-500/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-500/10 transition-colors border border-brand-500/20">
                  <Target className="w-7 h-7 text-brand-400" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">
                  {t('valueProposition.marketing.title')}
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed">
                  {t('valueProposition.marketing.description')}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Separador */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-800/30 to-transparent my-16 md:my-20" />

        {/* CTA final de la sección */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12 md:mt-20"
        >
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 font-light max-w-3xl mx-auto leading-relaxed">
            {t('valueProposition.conclusion')}
            <span className="text-white font-semibold"></span>.
          </p>
        </motion.div>

        {/* Separador inferior sutil */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-800/30 to-transparent mt-12 md:mt-28" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-brand-500 rounded-full mix-blend-screen filter blur-3xl opacity-5" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-400 rounded-full mix-blend-screen filter blur-3xl opacity-5" />
    </section>
  );
}
