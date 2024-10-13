import type { Metadata } from 'next';
import { setStaticParamsLocale } from 'next-international/server';

import { Article } from '@/components/entities/article';
import { ParagraphWithLinks } from '@/components/entities/paragraph-with-links';
import { RaspberryPiPicoPinout } from '@/components/features/raspberry-pi-pico-pinout';
import { Title } from '@/components/ui/title';
import { getI18n, getStaticParams } from '@/locales/server';
import { PageParams } from '@/types';
import { getAlternateURLs } from '@/utils/get-alternate-urls';

export const generateMetadata = async ({
  params: { lang }
}: PageParams): Promise<Metadata> => {
  const t = await getI18n();

  return {
    title: t('RaspberryPiPico.title'),
    description: t('RaspberryPiPico.description'),
    openGraph: {
      title: t('RaspberryPiPico.title'),
      description: t('RaspberryPiPico.description'),
      siteName: 'Stack of Circuits',
      locale: lang,
      type: 'website'
    },
    alternates: getAlternateURLs('/guides/raspberry-pi-pico', lang)
  };
};

export const generateStaticParams = () => {
  return getStaticParams();
};

const RaspberryPiPico = async ({ params: { lang } }: PageParams) => {
  setStaticParamsLocale(lang);

  const t = await getI18n();

  return (
    <>
      <Title className="mb-6 md:mb-10">{t('RaspberryPiPico.title')}</Title>
      <RaspberryPiPicoPinout />
      <Article>{t('RaspberryPiPico.article')}</Article>
      <ParagraphWithLinks className="text-sm text-gray-400">
        {t('RaspberryPiPico.copyright')}
      </ParagraphWithLinks>
    </>
  );
};

export default RaspberryPiPico;
