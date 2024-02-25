import { MetadataRoute } from 'next';

import { BASE_URL } from '@/constants';
import { defaultLocale, locales } from '@/i18n-config';

const routesList: MetadataRoute.Sitemap = [
  {
    url: '/tools/battery-life',
    changeFrequency: 'weekly',
    priority: 1
  },
  {
    url: '/tools/inductor-color-code',
    changeFrequency: 'weekly',
    priority: 1
  },
  {
    url: '/tools/led-resistor',
    changeFrequency: 'weekly',
    priority: 1
  },
  {
    url: '/tools/ohms-law',
    changeFrequency: 'weekly',
    priority: 1
  },
  {
    url: '/tools/parallel-equivalence',
    changeFrequency: 'weekly',
    priority: 1
  },
  {
    url: '/tools/resistor-color-code',
    changeFrequency: 'weekly',
    priority: 1
  },
  {
    url: '/tools/smd-resistor-code',
    changeFrequency: 'weekly',
    priority: 1
  },
  {
    url: '/tools/voltage-divider',
    changeFrequency: 'weekly',
    priority: 1
  },
  {
    url: '/tools',
    changeFrequency: 'monthly',
    priority: 0.8
  },
  {
    url: '',
    changeFrequency: 'monthly',
    priority: 0.5
  }
];

const generateSitemap = (): MetadataRoute.Sitemap => {
  const lastModified = new Date();

  return routesList.flatMap(({ url, changeFrequency, priority }) =>
    locales.map((locale) => {
      const localePath = locale === defaultLocale ? '' : `/${locale}`;

      return {
        url: `${BASE_URL}${localePath}${url}`,
        lastModified,
        changeFrequency,
        priority
      };
    })
  );
};

export default generateSitemap;
