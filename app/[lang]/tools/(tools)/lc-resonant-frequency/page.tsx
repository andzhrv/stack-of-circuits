import type { Metadata } from 'next';
import { setStaticParamsLocale } from 'next-international/server';

import { Article } from '@/components/entities/article';
import { CalculatorWrapper } from '@/components/entities/calculator-wrapper';
import { LCResonantFrequencyCalculator } from '@/components/features/lc-resonant-frequency-calculator';
import { Title } from '@/components/ui/title';
import { getI18n, getStaticParams } from '@/locales/server';
import { getAlternateURLs } from '@/utils/get-alternate-urls';

export const generateMetadata = async ({
  params: { lang }
}: {
  params: { lang: string };
}): Promise<Metadata> => {
  const t = await getI18n();

  return {
    title: t('LCResonantFrequency.title'),
    description: t('LCResonantFrequency.description'),
    openGraph: {
      title: t('LCResonantFrequency.title'),
      description: t('LCResonantFrequency.description'),
      siteName: 'Stack of Circuits',
      locale: lang,
      type: 'website'
    },
    alternates: getAlternateURLs('/tools/lc-resonant-frequency', lang)
  };
};

export const generateStaticParams = () => {
  return getStaticParams();
};

const LCResonantFrequency = async ({
  params: { lang }
}: {
  params: { lang: string };
}) => {
  setStaticParamsLocale(lang);

  const t = await getI18n();

  return (
    <>
      <Title className="mb-6 md:mb-10">{t('LCResonantFrequency.title')}</Title>
      <CalculatorWrapper>
        <LCResonantFrequencyCalculator />
      </CalculatorWrapper>
      <Article>{t('LCResonantFrequency.article')}</Article>
    </>
  );
};

export default LCResonantFrequency;
