import { NextRequest } from 'next/server';
import { createI18nMiddleware } from 'next-international/middleware';

import { i18nConfig } from './i18n-config';

const I18nMiddleware = createI18nMiddleware({
  locales: i18nConfig.locales,
  defaultLocale: i18nConfig.defaultLocale,
  urlMappingStrategy: 'rewriteDefault'
});

export function middleware(request: NextRequest) {
  return I18nMiddleware(request);
}

export const config = {
  matcher: ['/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)']
};
