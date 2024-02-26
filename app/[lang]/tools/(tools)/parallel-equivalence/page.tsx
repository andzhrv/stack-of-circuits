import type { Metadata } from 'next';
import { setStaticParamsLocale } from 'next-international/server';

import { CalculatorWrapper } from '@/components/entities/calculator-wrapper';
import { ParallelEquivalenceCalculator } from '@/components/features/parallel-equivalence-calculator';
import { Article } from '@/components/ui/article';
import { Paragraph } from '@/components/ui/paragraph';
import { Title } from '@/components/ui/title';
import { getI18n, getStaticParams } from '@/locales/server';

export const generateMetadata = async ({
  params: { lang }
}: {
  params: { lang: string };
}): Promise<Metadata> => {
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
    alternates: {
      languages: {
        en: '/tools/parallel-equivalence',
        'x-default': '/tools/parallel-equivalence',
        ru: '/ru/tools/parallel-equivalence'
      }
    }
  };
};

export const generateStaticParams = () => {
  return getStaticParams();
};

const ParallelEquivalence = async ({
  params: { lang }
}: {
  params: { lang: string };
}) => {
  setStaticParamsLocale(lang);

  const t = await getI18n();

  return (
    <>
      <Title className="mb-6 md:mb-10">{t('ParallelEquivalence.title')}</Title>
      <CalculatorWrapper>
        <ParallelEquivalenceCalculator />
      </CalculatorWrapper>
      <Article>
        <Title level={2} className="mb-4">
          {t('ParallelEquivalence.article.title')}
        </Title>
        <Paragraph>{t('ParallelEquivalence.article.paragraph')}</Paragraph>
      </Article>
    </>
  );
};

export default ParallelEquivalence;
