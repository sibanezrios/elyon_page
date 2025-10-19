'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { MessageSquare, Image, Mic, Calendar, Mail, BarChart, MessageCircle } from 'lucide-react';
import { siteConfig } from '@/site.config';
import { analytics } from '@/lib/utils';

export function DemoTelegram() {
  const t = useTranslations();

  const handleWhatsAppClick = () => {
    analytics.track('cta_whatsapp_click', { 
      page: '/',
      section: 'demo_telegram' 
    });
  };

  const features = [
    { key: 'ocr', icon: Image },
    { key: 'voice', icon: Mic },
    { key: 'calendar', icon: Calendar },
    { key: 'email', icon: Mail },
    { key: 'stats', icon: BarChart },
  ];

  const pipeline = [
    { key: 'input', label: 'OCR/ASR' },
    { key: 'parse', label: 'Parsing' },
    { key: 'rules', label: 'Reglas' },
    { key: 'integration', label: 'Integración' },
    { key: 'report', label: 'Reporte' },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
          {t('demo.telegram.title')}
        </h3>
        <p className="text-gray-400 leading-relaxed max-w-4xl text-base md:text-lg">
          {t('demo.telegram.description')}
        </p>
      </div>

      {/* Features Grid */}
      <div>
        <h4 className="text-lg font-semibold mb-6 text-white">{t('demo.telegram.capabilitiesLabel')}</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-black/40 border border-gray-800/60 rounded-lg p-6 flex flex-col items-center text-center hover:border-brand-500/40 transition-colors"
            >
              <div className="w-12 h-12 bg-brand-500/20 text-brand-400 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6" />
              </div>
              <span className="text-base md:text-lg font-medium text-gray-300">
                {t(`demo.telegram.features.${feature.key}`)}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Pipeline */}
      <div>
        <h4 className="text-lg font-semibold mb-6 text-white">{t('demo.telegram.pipelineLabel')}</h4>
        <div className="overflow-x-auto pb-4">
          <div className="flex items-center justify-start gap-2">
            {pipeline.map((step, index) => (
              <div key={step.key} className="flex items-center gap-2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="px-4 py-2 border-2 border-brand-500/60 text-brand-400 rounded-lg font-medium text-sm whitespace-nowrap hover:bg-brand-500/10 transition-colors"
                >
                  {step.label}
                </motion.div>
                {index < pipeline.length - 1 && (
                  <span className="text-brand-500/60 text-lg">→</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        <a
          href={siteConfig.contact.whatsappDemoUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleWhatsAppClick}
          className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors"
        >
          <MessageCircle className="w-5 h-5" />
          <span>{t('cta.requestDemo')}</span>
        </a>
      </div>
    </div>
  );
}
