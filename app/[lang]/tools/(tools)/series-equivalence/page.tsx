import type { Metadata } from 'next';
import { setStaticParamsLocale } from 'next-international/server';

import { Article } from '@/components/entities/article';
import { CalculatorWrapper } from '@/components/features/calculator-wrapper';
import { SeriesEquivalenceCalculator } from '@/components/features/equivalence-calculator/ui/series-equivalence-calculator';
import { Title } from '@/components/ui/title';
import { getI18n, getStaticParams } from '@/locales/server';
import { PageParams } from '@/types';
import { getAlternateURLs } from '@/utils/get-alternate-urls';

export const generateMetadata = async ({
  params: { lang }
}: PageParams): Promise<Metadata> => {
  const t = await getI18n();

  return {
    title: t('SeriesEquivalence.title'),
    description: t('SeriesEquivalence.description'),
    openGraph: {
      title: t('SeriesEquivalence.title'),
      description: t('SeriesEquivalence.description'),
      siteName: 'Stack of Circuits',
      locale: lang,
      type: 'website'
    },
    alternates: getAlternateURLs('/tools/series-equivalence', lang)
  };
};

export const generateStaticParams = () => {
  return getStaticParams();
};

const SeriesEquivalence = async ({ params: { lang } }: PageParams) => {
  setStaticParamsLocale(lang);

  const t = await getI18n();

  return (
    <>
      <Title className="mb-6 md:mb-10">{t('SeriesEquivalence.title')}</Title>
      <CalculatorWrapper>
        <SeriesEquivalenceCalculator />
      </CalculatorWrapper>
      <Article>{t('SeriesEquivalence.article')}</Article>
    </>
  );
};

export default SeriesEquivalence;
