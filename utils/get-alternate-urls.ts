import { AlternateURLs } from 'next/dist/lib/metadata/types/alternative-urls-types';

import { defaultLocale } from '@/i18n-config';

export const getAlternateURLs = (url: string, lang: string): AlternateURLs => ({
  canonical: lang === defaultLocale ? url : `/${lang}${url}`,
  languages: {
    'x-default': url,
    en: url,
    ru: `/ru${url}`
  }
});
