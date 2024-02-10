import type { Metadata } from 'next';

import { CalculatorWrapper } from '@/components/entities/calculator-wrapper';
import { ParallelEquivalenceCalculator } from '@/components/features/parallel-equivalence-calculator';
import { Article } from '@/components/ui/article';
import { Paragraph } from '@/components/ui/paragraph';
import { Title } from '@/components/ui/title';
import { getI18n } from '@/locales/server';

export const generateMetadata = async ({
  params: { lang }
}: {
  params: { lang: string };
}) => {
  const t = await getI18n();

  const metadata: Metadata = {
    title: `${t('ParallelEquivalence.title')} – Stack of Circuits`,
    description: t('ParallelEquivalence.description'),
    openGraph: {
      title: t('ParallelEquivalence.title'),
      description: t('ParallelEquivalence.description'),
      siteName: 'Stack of Circuits',
      locale: lang,
      type: 'website'
    }
  };

  return metadata;
};

const ParallelEquivalence = async () => {
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
