import { NextRequest } from 'next/server';
import { createI18nMiddleware } from 'next-international/middleware';

import { defaultLocale, locales } from './i18n-config';

const I18nMiddleware = createI18nMiddleware({
  locales,
  defaultLocale,
  urlMappingStrategy: 'rewriteDefault',
  resolveLocaleFromRequest: ({ nextUrl: { pathname } }): 'en' | 'ru' =>
    pathname === '/ru' || pathname.startsWith(`/ru/`) ? 'ru' : defaultLocale
});

export function middleware(request: NextRequest) {
  return I18nMiddleware(request);
}

export const config = {
  matcher: ['/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)']
};
