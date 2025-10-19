'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Sparkles, TrendingUp, BarChart3, Bot, Zap, LineChart } from 'lucide-react';

interface FeatureGridProps {
  type: 'services' | 'differentiators';
}

export function FeatureGrid({ type }: FeatureGridProps) {
  const t = useTranslations();

  const servicesData = [
    {
      icon: Bot,
      title: t('services.ai.title'),
      description: t('services.ai.description'),
    },
    {
      icon: Zap,
      title: t('services.automation.title'),
      description: t('services.automation.description'),
    },
    {
      icon: LineChart,
      title: t('services.analytics.title'),
      description: t('services.analytics.description'),
    },
    {
      icon: Sparkles,
      title: t('services.demos.title'),
      description: t('services.demos.description'),
    },
  ];

  const differentiatorsData = [
    {
      icon: Sparkles,
      title: t('differentiators.strategy.title'),
      description: t('differentiators.strategy.description'),
    },
    {
      icon: TrendingUp,
      title: t('differentiators.maturity.title'),
      description: t('differentiators.maturity.description'),
    },
    {
      icon: BarChart3,
      title: t('differentiators.metrics.title'),
      description: t('differentiators.metrics.description'),
    },
  ];

  const data = type === 'services' ? servicesData : differentiatorsData;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className={`grid grid-cols-1 sm:grid-cols-2 ${type === 'services' ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} gap-4 md:gap-6 lg:gap-8`}
    >
      {data.map((feature, index) => (
        <motion.div
          key={index}
          variants={item}
          className="bg-black/30 p-4 sm:p-5 md:p-6 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-brand-500/20 transition-all border border-brand-500/30 hover:border-brand-500/60 backdrop-blur-sm"
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-500/20 text-brand-400 rounded-lg flex items-center justify-center mb-3 md:mb-4">
            <feature.icon className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 md:mb-3 text-white">
            {feature.title}
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed">
            {feature.description}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}
