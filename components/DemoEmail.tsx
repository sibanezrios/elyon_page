'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Mail, Send, CheckCircle, Clock, MessageCircle, Send as SendIcon, Filter, Zap } from 'lucide-react';
import { siteConfig } from '@/site.config';
import { analytics } from '@/lib/utils';

export function DemoEmail() {
  const t = useTranslations();

  const handleWhatsAppClick = () => {
    analytics.track('cta_whatsapp_click', { 
      page: '/',
      section: 'demo_email' 
    });
  };

  const capabilities = [
    { icon: SendIcon, label: t('demo.email.capabilitiesLong.send') },
    { icon: Filter, label: t('demo.email.capabilitiesLong.reply') },
    { icon: CheckCircle, label: t('demo.email.capabilitiesLong.tracking') },
    { icon: Zap, label: t('demo.email.capabilitiesLong.training') },
    { icon: Mail, label: t('demo.email.capabilitiesLong.analysis') },
  ];

  const pipeline = [
    { key: 'ingest', label: t('demo.email.pipelineDesc.ingest') },
    { key: 'classify', label: t('demo.email.pipelineDesc.classify') },
    { key: 'generate', label: t('demo.email.pipelineDesc.generate') },
    { key: 'send', label: t('demo.email.pipelineDesc.send') },
    { key: 'track', label: t('demo.email.pipelineDesc.track') },
  ];

  return (
    <div className="space-y-6 md:space-y-8">
      <div>
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-white">
          {t('demo.email.title')}
        </h3>
        <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed max-w-4xl">
          {t('demo.email.description')}
        </p>
      </div>

      <div>
        <h4 className="text-base sm:text-lg md:text-lg font-semibold mb-4 md:mb-6 text-white">{t('demo.email.capabilitiesLabel')}</h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4">
          {capabilities.map((cap, index) => (
            <motion.div
              key={cap.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-black/40 border border-gray-800/60 rounded-lg p-3 sm:p-4 md:p-5 flex flex-col items-center text-center hover:border-brand-500/40 transition-colors"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-500/20 text-brand-400 rounded-lg flex items-center justify-center mb-2 md:mb-3">
                <cap.icon className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <span className="text-xs sm:text-sm md:text-sm font-medium text-gray-300">
                {cap.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-base sm:text-lg md:text-lg font-semibold mb-4 md:mb-6 text-white">{t('demo.email.pipelineLabel')}</h4>
        <div className="overflow-x-auto pb-2">
          <div className="flex items-center justify-start gap-2 min-w-min px-2">
            {pipeline.map((step, index) => (
              <div key={step.key} className="flex items-center gap-2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="px-2 sm:px-3 md:px-4 py-1 sm:py-2 border-2 border-brand-500/60 text-brand-400 rounded-lg font-medium text-xs sm:text-sm whitespace-nowrap hover:bg-brand-500/10 transition-colors"
                >
                  {step.label}
                </motion.div>
                {index < pipeline.length - 1 && (
                  <span className="text-brand-500/60 text-sm hidden sm:inline">→</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
        <a
          href={siteConfig.contact.whatsappDemoUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleWhatsAppClick}
          className="inline-flex items-center justify-center space-x-2 px-5 sm:px-6 py-2 sm:py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors text-sm sm:text-base"
        >
          <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
          <span>{t('cta.requestDemo')}</span>
        </a>
      </div>
    </div>
  );
}
