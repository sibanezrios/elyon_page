'use client';

import { useTranslations } from 'next-intl';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { AboutUs } from '@/components/AboutUs';
import { PurposeSection } from '@/components/PurposeSection';
import { ValueProposition } from '@/components/ValueProposition';
import { FeatureGrid } from '@/components/FeatureGrid';
import { DemoEmail } from '@/components/DemoEmail';
import { DemoTelegram } from '@/components/DemoTelegram';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';

export default function HomePage() {
  const t = useTranslations();

  return (
    <>
      <Header />
      <main className="pt-14 sm:pt-16">
        <Hero />
        
        {/* Separador sutil */}
        <div className="h-px bg-gradient-to-r from-transparent via-brand-500/20 to-transparent" />
        
        <AboutUs />
        
        {/* Separador sutil */}
        <div className="h-px bg-gradient-to-r from-transparent via-brand-500/20 to-transparent" />
        
        <PurposeSection />
        
        {/* Separador sutil */}
        <div className="h-px bg-gradient-to-r from-transparent via-brand-500/20 to-transparent" />
        
        <ValueProposition />
        
        {/* Separador sutil */}
        <div className="h-px bg-gradient-to-r from-transparent via-brand-500/20 to-transparent" />
        
        <section id="offerings" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
              {t('section.offerings')}
            </h2>
            <FeatureGrid type="services" />
          </div>
        </section>

        {/* Separador sutil */}
        <div className="h-px bg-gradient-to-r from-transparent via-brand-500/20 to-transparent" />
        
        <section id="differentiators" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
              {t('section.differentiators')}
            </h2>
            <FeatureGrid type="differentiators" />
          </div>
        </section>

        {/* Separador sutil */}
        <div className="h-px bg-gradient-to-r from-transparent via-brand-500/20 to-transparent" />
        
        <section id="demos" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
              {t('section.demos')}
            </h2>
            <div className="space-y-12">
              <div className="bg-black/30 rounded-xl shadow-lg border border-brand-500/30 p-4 sm:p-6 md:p-10 backdrop-blur-sm hover:shadow-2xl hover:shadow-brand-500/20 transition-all hover:border-brand-500/60 overflow-hidden">
                <DemoEmail />
              </div>
              <div className="bg-black/30 rounded-xl shadow-lg border border-brand-500/30 p-4 sm:p-6 md:p-10 backdrop-blur-sm hover:shadow-2xl hover:shadow-brand-500/20 transition-all hover:border-brand-500/60 overflow-hidden">
                <DemoTelegram />
              </div>
            </div>
          </div>
        </section>

        {/* Separador sutil */}
        <div className="h-px bg-gradient-to-r from-transparent via-brand-500/20 to-transparent" />
        
        <section id="faq" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
              {t('section.faq')}
            </h2>
            <FAQ />
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
