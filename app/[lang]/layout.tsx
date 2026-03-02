import type { Metadata, Viewport } from 'next';
import { Mulish } from 'next/font/google';
import Script from 'next/script';

import { Footer } from '@/components/features/footer';
import { Header } from '@/components/features/header';
import { ThemeProvider } from '@/components/theme-provider';
import { BASE_URL } from '@/constants';
import { cn } from '@/lib/utils';
import { I18nProviderClient } from '@/locales/client';

import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    template: '%s / Stack of Circuits',
    default: 'Stack of Circuits'
  }
};

const font = Mulish({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-sans'
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1
};

const RootLayout = ({
  params: { lang },
  children
}: Readonly<{
  params: { lang: string };
  children: React.ReactNode;
}>) => {
  return (
    <html lang={lang} className="h-full" suppressHydrationWarning>
      <body className={cn(font.className, 'flex flex-col h-full')}>
        <Script
          id="um-counter"
          defer
          strategy="beforeInteractive"
          src="https://um.stackofcircuits.com/script.js"
          data-website-id="a9b64df3-18ec-4c9e-89d9-6296fc1ae638"
          data-domains="stackofcircuits.com"
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <I18nProviderClient locale={lang}>
            <Header />
            <div className="basis-full mx-6 md:mx-12 lg:mx-20 py-10">
              {children}
            </div>
            <Footer />
          </I18nProviderClient>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
