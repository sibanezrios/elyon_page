'use client';

import { MessageCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { siteConfig } from '@/site.config';
import { analytics } from '@/lib/utils';

export function WhatsAppFloat() {
  const t = useTranslations('cta');

  const handleClick = () => {
    analytics.track('cta_whatsapp_click', { 
      page: typeof window !== 'undefined' ? window.location.pathname : '',
      section: 'float' 
    });
  };

  return (
    <a
      href={siteConfig.contact.whatsappDemoUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-3 sm:p-4 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 sm:gap-3 group hover:pr-3 sm:hover:pr-4"
      aria-label="Abrir WhatsApp para solicitar demo"
    >
      <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
      <span className="hidden group-hover:inline-block whitespace-nowrap font-medium text-sm sm:text-base">
        {t('whatsapp')}
      </span>
    </a>
  );
}
