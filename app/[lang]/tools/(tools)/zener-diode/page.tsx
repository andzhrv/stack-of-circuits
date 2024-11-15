import type { Metadata } from 'next';
import { setStaticParamsLocale } from 'next-international/server';

import { Article } from '@/components/entities/article';
import { CalculatorWrapper } from '@/components/features/calculator-wrapper';
import { ZenerDiodeCalculator } from '@/components/features/zener-diode-calculator';
import { Title } from '@/components/ui/title';
import { getI18n, getStaticParams } from '@/locales/server';
import { PageParams } from '@/types';
import { getAlternateURLs } from '@/utils/get-alternate-urls';

export const generateMetadata = async ({
  params: { lang }
}: PageParams): Promise<Metadata> => {
  const t = await getI18n();

  return {
    title: t('ZenerDiode.title'),
    description: t('ZenerDiode.description'),
    openGraph: {
      title: t('ZenerDiode.title'),
      description: t('ZenerDiode.description'),
      siteName: 'Stack of Circuits',
      locale: lang,
      type: 'website'
    },
    alternates: getAlternateURLs('/tools/zener-diode', lang)
  };
};

export const generateStaticParams = () => {
  return getStaticParams();
};

const ZenerDiode = async ({ params: { lang } }: PageParams) => {
  setStaticParamsLocale(lang);

  const t = await getI18n();

  return (
    <>
      <Title className="mb-6 md:mb-10">{t('ZenerDiode.title')}</Title>
      <CalculatorWrapper>
        <ZenerDiodeCalculator />
      </CalculatorWrapper>
      <Article>{t('ZenerDiode.article')}</Article>
    </>
  );
};

export default ZenerDiode;
