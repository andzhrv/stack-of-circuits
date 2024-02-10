import type { Metadata } from 'next';

import { CalculatorWrapper } from '@/components/entities/calculator-wrapper';
import { OhmsLawCalculator } from '@/components/features/ohms-law-calculator';
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
    title: `${t('OhmsLaw.title')} – Stack of Circuits`,
    description: t('OhmsLaw.description'),
    openGraph: {
      title: t('OhmsLaw.title'),
      description: t('OhmsLaw.description'),
      siteName: 'Stack of Circuits',
      locale: lang,
      type: 'website'
    }
  };

  return metadata;
};

const OhmsLaw = async () => {
  const t = await getI18n();

  return (
    <>
      <Title className="mb-6 md:mb-10">{t('OhmsLaw.title')}</Title>
      <CalculatorWrapper>
        <OhmsLawCalculator />
      </CalculatorWrapper>
      <Article>
        <Title level={2} className="mb-4">
          {t('OhmsLaw.article.title')}
        </Title>
        <Paragraph>{t('OhmsLaw.article.paragraph')}</Paragraph>
      </Article>
    </>
  );
};

export default OhmsLaw;
