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
        <div className="h-px bg-gradient-to-r from-transparent via-gray-800/30 to-transparent mb-16 md:mb-20" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            {t('purpose.title')}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
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
                  <div className="relative h-full bg-transparent border border-gray-800/30 rounded-xl p-8 backdrop-blur-sm hover:border-brand-500/30 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-brand-500/5 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-brand-500/10 transition-colors mt-1 border border-brand-500/20">
                        <Icon className="w-6 h-6 text-brand-400" />
                      </div>
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-white mb-3">
                          {t(`purpose.items.${purpose.key}.title`)}
                        </h3>
                        <p className="text-gray-300 leading-relaxed text-base md:text-lg">
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
        <div className="h-px bg-gradient-to-r from-transparent via-gray-800/30 to-transparent mt-20 md:mt-28" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-brand-500 rounded-full mix-blend-screen filter blur-3xl opacity-5" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-400 rounded-full mix-blend-screen filter blur-3xl opacity-5" />
    </section>
  );
}
