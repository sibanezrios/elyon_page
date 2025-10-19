'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Target, Compass, Infinity, Users } from 'lucide-react';

export function PurposeSection() {
  const t = useTranslations();

  const purposes = [
    {
      icon: Target,
      key: 'mission'
    },
    {
      icon: Compass,
      key: 'approach'
    },
    {
      icon: Infinity,
      key: 'maturity'
    },
    {
      icon: Users,
      key: 'partner'
    }
  ];

  return (
    <section id="pillars" className="relative py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Separador superior sutil */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-800/30 to-transparent mb-12 md:mb-20" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-white">
            {t('purpose.title')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {purposes.map((purpose, index) => {
            const Icon = purpose.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative h-full overflow-hidden rounded-xl">
                  {/* Fondo difuminado sutil */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-500/3 via-transparent to-brand-400/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Contenido */}
                  <div className="relative h-full bg-transparent border border-gray-800/30 rounded-xl p-5 sm:p-6 md:p-8 backdrop-blur-sm hover:border-brand-500/30 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-500/5 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-brand-500/10 transition-colors border border-brand-500/20">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-brand-400" />
                      </div>
                      <div className="text-center sm:text-left">
                        <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2">
                          {t(`purpose.items.${purpose.key}.title`)}
                        </h3>
                        <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
                          {t(`purpose.items.${purpose.key}.description`)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Separador inferior sutil */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-800/30 to-transparent mt-12 md:mt-28" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-brand-500 rounded-full mix-blend-screen filter blur-3xl opacity-5" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-400 rounded-full mix-blend-screen filter blur-3xl opacity-5" />
    </section>
  );
}
