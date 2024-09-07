import type { Metadata } from 'next';
import { setStaticParamsLocale } from 'next-international/server';

import { Article } from '@/components/entities/article';
import { CalculatorWrapper } from '@/components/entities/calculator-wrapper';
import { LedResistorCalculator } from '@/components/features/led-resistor-calculator';
import { Title } from '@/components/ui/title';
import { getI18n, getStaticParams } from '@/locales/server';
import { PageParams } from '@/types';
import { getAlternateURLs } from '@/utils/get-alternate-urls';

export const generateMetadata = async ({
  params: { lang }
}: PageParams): Promise<Metadata> => {
  const t = await getI18n();

  return {
    title: t('LedResistor.title'),
    description: t('LedResistor.description'),
    openGraph: {
      title: t('LedResistor.title'),
      description: t('LedResistor.description'),
      siteName: 'Stack of Circuits',
      locale: lang,
      type: 'website'
    },
    alternates: getAlternateURLs('/tools/led-resistor', lang)
  };
};

export const generateStaticParams = () => {
  return getStaticParams();
};

const LedResistor = async ({ params: { lang } }: PageParams) => {
  setStaticParamsLocale(lang);

  const t = await getI18n();

  return (
    <>
      <Title className="mb-6 md:mb-10">{t('LedResistor.title')}</Title>
      <CalculatorWrapper>
        <LedResistorCalculator />
      </CalculatorWrapper>
      <Article>{t('LedResistor.article')}</Article>
    </>
  );
};

export default LedResistor;
