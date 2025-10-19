'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import { Menu, X, Globe } from 'lucide-react';
import { Link } from '@/routing';
import { SocialLinks } from './SocialLinks';
import { siteConfig } from '@/site.config';
import { analytics } from '@/lib/utils';

export function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLocale = () => {
    const newLocale = locale === 'es' ? 'en' : 'es';
    localStorage.setItem('elyon_locale', newLocale);
    analytics.track('locale_change', { from: locale, to: newLocale });
    
    // Remove current locale from pathname
    const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/';
    window.location.href = `/${newLocale}${pathWithoutLocale}`;
  };

  const navItems = [
    { href: '/', label: t('home') },
    { href: '/#about', label: t('about') },
    { href: '/#offerings', label: t('solutions') },
    { href: '/#demos', label: t('demos') },
    { href: '/#faq', label: t('resources') },
    { href: '/contacto', label: t('contact') },
  ];

  return (
    <>
      {/* Overlay blur cuando menú está abierto */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
      
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-brand-500/30 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex h-14 sm:h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-white">
                ELYON
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-gray-300 hover:text-brand-400 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Right side: Social + Language Toggle */}
            <div className="hidden md:flex items-center space-x-4">
              <SocialLinks compact />
              
              <button
                onClick={toggleLocale}
                className="flex items-center space-x-1 text-sm font-medium text-gray-300 hover:text-brand-400 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-black rounded px-2 py-1"
                aria-label="Cambiar idioma"
              >
                <Globe className="w-4 h-4" />
                <span>{locale.toUpperCase()}</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-300 hover:text-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-black rounded"
              aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-brand-500/30 bg-black/80">
              <nav className="flex flex-col space-y-3">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-base font-medium text-gray-300 hover:text-brand-400 transition-colors py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                
                <div className="pt-4 border-t border-brand-500/30 space-y-3">
                  <SocialLinks />
                  
                  <button
                    onClick={() => {
                      toggleLocale();
                      setIsMenuOpen(false);
                    }}
                    className="flex items-center space-x-2 text-base font-medium text-gray-300 hover:text-brand-400 transition-colors py-2 w-full"
                  >
                    <Globe className="w-5 h-5" />
                    <span>{locale === 'es' ? 'English' : 'Español'}</span>
                  </button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
