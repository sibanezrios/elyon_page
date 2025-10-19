'use client';

import { Instagram, Linkedin } from 'lucide-react';
import { siteConfig } from '@/site.config';
import { analytics } from '@/lib/utils';

interface SocialLinksProps {
  compact?: boolean;
}

export function SocialLinks({ compact = false }: SocialLinksProps) {
  const handleClick = (platform: string) => {
    analytics.track('social_link_click', { platform });
  };

  const socialItems = [
    {
      name: 'Instagram',
      icon: Instagram,
      url: siteConfig.social.instagram,
      color: 'hover:text-pink-600',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: siteConfig.social.linkedin,
      color: 'hover:text-blue-700',
    },
  ];

  if (compact) {
    return (
      <div className="flex items-center space-x-3">
        {socialItems.map((item) => (
          <a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleClick(item.name)}
            className={`text-gray-400 ${item.color} transition-colors`}
            aria-label={item.name}
            title={item.name}
          >
            <item.icon className="w-5 h-5" />
          </a>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col space-y-2">
      {socialItems.map((item) => (
        <a
          key={item.name}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => handleClick(item.name)}
          className={`flex items-center space-x-2 text-gray-300 ${item.color} transition-colors`}
        >
          <item.icon className="w-5 h-5" />
          <span>{item.name}</span>
        </a>
      ))}
    </div>
  );
}
