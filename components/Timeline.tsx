'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Globe2, Users, Target } from 'lucide-react';

export function Timeline() {
  const t = useTranslations('purpose');

  const items = [
    {
      key: 'ecosystems',
      icon: Globe2,
      title: t('ecosystems.title'),
      description: t('ecosystems.description'),
    },
    {
      key: 'longterm',
      icon: Users,
      title: t('longterm.title'),
      description: t('longterm.description'),
    },
    {
      key: 'execution',
      icon: Target,
      title: t('execution.title'),
      description: t('execution.description'),
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="space-y-8">
        {items.map((item, index) => (
          <motion.div
            key={item.key}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="flex items-start gap-6"
          >
            <div className="flex-shrink-0 w-16 h-16 bg-brand-500/20 text-brand-400 rounded-full flex items-center justify-center border-2 border-brand-500/50">
              <item.icon className="w-8 h-8" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2 text-white">
                {item.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
