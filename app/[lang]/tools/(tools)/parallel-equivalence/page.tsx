import type { Metadata } from 'next';
import { setStaticParamsLocale } from 'next-international/server';

import { Article } from '@/components/entities/article';
import { CalculatorWrapper } from '@/components/features/calculator-wrapper';
import { ParallelEquivalenceCalculator } from '@/components/features/equivalence-calculator/ui/parallel-equivalence-calculator';
import { Title } from '@/components/ui/title';
import { getI18n, getStaticParams } from '@/locales/server';
import { PageParams } from '@/types';
import { getAlternateURLs } from '@/utils/get-alternate-urls';

export const generateMetadata = async ({
  params: { lang }
}: PageParams): Promise<Metadata> => {
  const t = await getI18n();

  return {
    title: t('ParallelEquivalence.title'),
    description: t('ParallelEquivalence.description'),
    openGraph: {
      title: t('ParallelEquivalence.title'),
      description: t('ParallelEquivalence.description'),
      siteName: 'Stack of Circuits',
      locale: lang,
      type: 'website'
    },
    alternates: getAlternateURLs('/tools/parallel-equivalence', lang)
  };
};

export const generateStaticParams = () => {
  return getStaticParams();
};

const ParallelEquivalence = async ({ params: { lang } }: PageParams) => {
  setStaticParamsLocale(lang);

  const t = await getI18n();

  return (
    <>
      <Title className="mb-6 md:mb-10">{t('ParallelEquivalence.title')}</Title>
      <CalculatorWrapper>
        <ParallelEquivalenceCalculator />
      </CalculatorWrapper>
      <Article>{t('ParallelEquivalence.article')}</Article>
    </>
  );
};

export default ParallelEquivalence;
