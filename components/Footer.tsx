'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/routing';
import { SocialLinks } from './SocialLinks';
import { siteConfig } from '@/site.config';

export function Footer() {
  const t = useTranslations();

  const navColumns = [
    {
      title: t('footer.solutions'),
      links: [
        { href: '/#offerings', label: t('footer.solutionsLabel') },
        { href: '/#demos', label: t('footer.demosLabel') },
      ],
    },
    {
      title: t('footer.about'),
      links: [
        { href: '/#about', label: t('footer.aboutLabel') },
        { href: '/#faq', label: t('footer.resourcesLabel') },
      ],
    },
  ];

  return (
    <footer className="bg-black/50 text-gray-300 border-t border-brand-500/20">
      <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-8 md:mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
              {t('footer.brand')}
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-white mb-3 md:mb-4">{t('footer.subtitle')}</p>
            <div>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 break-all">
                {siteConfig.contact.email}
              </p>
            </div>
          </div>

          {/* Navigation Columns */}
          {navColumns.map((column) => (
            <div key={column.title}>
              <h4 className="font-semibold text-white mb-4 md:mb-6 text-sm sm:text-base">{column.title}</h4>
              <ul className="space-y-2 md:space-y-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-brand-400 transition-colors text-sm sm:text-base"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800/50 pt-6 md:pt-8">
          <div className="flex flex-col gap-4 md:gap-0 md:flex-row md:justify-between md:items-center">
            <div className="text-xs sm:text-sm text-gray-500 order-3 md:order-1">
              {t('footer.copyright')}
            </div>
            
            <div className="flex items-center gap-4 md:gap-6 order-1 md:order-2">
              <div className="text-xs sm:text-sm font-semibold text-white whitespace-nowrap">
                {t('footer.follow')}
              </div>
              <SocialLinks compact />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
