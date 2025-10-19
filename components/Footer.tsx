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
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">
              {t('footer.brand')}
            </h3>
            <p className="text-base md:text-lg text-white mb-4">{t('footer.subtitle')}</p>
            <div>
              <p className="text-base md:text-lg text-gray-300">
                {siteConfig.contact.email}
              </p>
            </div>
          </div>

          {/* Navigation Columns */}
          {navColumns.map((column) => (
            <div key={column.title}>
              <h4 className="font-semibold text-white mb-6">{column.title}</h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-brand-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-sm text-gray-500">
              {t('footer.copyright')}
            </div>
            
            <div className="flex items-center gap-6">
              <div className="text-sm font-semibold text-white">
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
