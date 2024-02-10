import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';

import { Footer } from '@/components/features/footer';
import { Header } from '@/components/features/header';
import { YaMetrikaCounter } from '@/components/features/ya-metrika/component';
import { YA_METRIKA_SCRIPT } from '@/components/features/ya-metrika/config';
import { ThemeProvider } from '@/components/theme-provider';
import { cn } from '@/lib/utils';
import { I18nProviderClient } from '@/locales/client';
import { getI18n } from '@/locales/server';

import './globals.css';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-sans'
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1
};

export const generateMetadata = async ({
  params: { lang }
}: {
  params: { lang: string };
}) => {
  const t = await getI18n();

  const metadata: Metadata = {
    title: t('Root.title'),
    description: t('Root.description'),
    openGraph: {
      title: t('Root.title'),
      description: t('Root.description'),
      url: 'https://stackofcircuits.com',
      siteName: 'Stack of Circuits',
      locale: lang,
      type: 'website'
    }
  };

  return metadata;
};

const RootLayout = ({
  params: { lang },
  children
}: Readonly<{
  params: { lang: string };
  children: React.ReactNode;
}>) => {
  return (
    <html lang={lang} className="h-full">
      <body className={cn(inter.className, 'flex flex-col h-full')}>
        <Script id="metrika-counter" strategy="beforeInteractive">
          {YA_METRIKA_SCRIPT}
        </Script>
        <YaMetrikaCounter />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <I18nProviderClient locale={lang}>
            <Header />
            <main className="basis-full mx-6 md:mx-12 lg:mx-20 py-10">
              {children}
            </main>
            <Footer />
          </I18nProviderClient>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
