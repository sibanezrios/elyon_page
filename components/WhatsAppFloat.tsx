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
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 group"
      aria-label="Abrir WhatsApp para solicitar demo"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="hidden group-hover:inline-block whitespace-nowrap pr-2 font-medium">
        {t('whatsapp')}
      </span>
    </a>
  );
}
