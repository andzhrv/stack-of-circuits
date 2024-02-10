import type { Metadata } from 'next';

import { CalculatorWrapper } from '@/components/entities/calculator-wrapper';
import { InductorColorCodeCalculator } from '@/components/features/inductor-color-code-calculator';
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
    title: `${t('InductorColorCode.title')} – Stack of Circuits`,
    description: t('InductorColorCode.description'),
    openGraph: {
      title: t('InductorColorCode.title'),
      description: t('InductorColorCode.description'),
      siteName: 'Stack of Circuits',
      locale: lang,
      type: 'website'
    }
  };

  return metadata;
};

const InductorColorCode = async () => {
  const t = await getI18n();

  return (
    <>
      <Title className="mb-6 md:mb-10">{t('InductorColorCode.title')}</Title>
      <CalculatorWrapper>
        <InductorColorCodeCalculator />
      </CalculatorWrapper>
      <Article>
        <Title level={2} className="mb-4">
          {t('InductorColorCode.article.title')}
        </Title>
        <Paragraph>{t('InductorColorCode.article.paragraph')}</Paragraph>
      </Article>
    </>
  );
};

export default InductorColorCode;
