'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { MessageCircle, Mail, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/site.config';
import { analytics } from '@/lib/utils';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';

export default function ContactPage() {
  const t = useTranslations();

  const handleWhatsAppClick = () => {
    analytics.track('contact_whatsapp_click', { 
      page: '/contacto',
      section: 'contact' 
    });
    window.open(siteConfig.contact.whatsappDemoUrl, '_blank');
  };

  const handleEmailClick = () => {
    analytics.track('contact_email_click', { 
      page: '/contacto',
      section: 'contact' 
    });
    window.location.href = `mailto:${siteConfig.contact.email}`;
  };

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
              {t('contact.title')}
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-16">
              {t('contact.orContact')}
            </p>

            {/* Contact Options */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* WhatsApp Option */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                onClick={handleWhatsAppClick}
                className="group cursor-pointer"
              >
                <div className="relative h-full overflow-hidden rounded-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-500/3 via-transparent to-brand-400/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative h-full bg-black/30 border border-brand-500/30 rounded-2xl p-8 md:p-12 backdrop-blur-sm hover:border-brand-500/60 transition-all duration-300">
                    <div className="w-16 h-16 bg-brand-500/20 text-brand-400 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:bg-brand-500/30 transition-colors">
                      <MessageCircle className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                      WhatsApp
                    </h3>
                    <p className="text-gray-400 mb-6">
                      {t('cta.requestDemo')}
                    </p>
                    <div className="inline-flex items-center space-x-2 text-brand-400 font-semibold group-hover:text-brand-300 transition-colors">
                      <span>{t('contact.whatsappLabel')}</span>
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Email Option */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                onClick={handleEmailClick}
                className="group cursor-pointer"
              >
                <div className="relative h-full overflow-hidden rounded-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-500/3 via-transparent to-brand-400/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative h-full bg-black/30 border border-brand-500/30 rounded-2xl p-8 md:p-12 backdrop-blur-sm hover:border-brand-500/60 transition-all duration-300">
                    <div className="w-16 h-16 bg-brand-500/20 text-brand-400 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:bg-brand-500/30 transition-colors">
                      <Mail className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                      Email
                    </h3>
                    <p className="text-gray-400 mb-6">
                      {siteConfig.contact.email}
                    </p>
                    <div className="inline-flex items-center space-x-2 text-brand-400 font-semibold group-hover:text-brand-300 transition-colors">
                      <span>{t('contact.emailLabel')}</span>
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-black/30 border border-brand-500/30 rounded-2xl p-8 backdrop-blur-sm"
            >
              <p className="text-gray-300 text-lg">
                Nos pondremos en contacto contigo lo antes posible.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
