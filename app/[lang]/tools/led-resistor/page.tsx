import type { Metadata } from 'next';

import { CalculatorWrapper } from '@/components/entities/calculator-wrapper';
import { LedResistorCalculator } from '@/components/features/led-resistor-calculator';
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
    title: `${t('LedResistor.title')} – Stack of Circuits`,
    description: t('LedResistor.description'),
    openGraph: {
      title: t('LedResistor.title'),
      description: t('LedResistor.description'),
      siteName: 'Stack of Circuits',
      locale: lang,
      type: 'website'
    }
  };

  return metadata;
};

const LedResistor = async () => {
  const t = await getI18n();

  return (
    <>
      <Title className="mb-6 md:mb-10">{t('LedResistor.title')}</Title>
      <CalculatorWrapper>
        <LedResistorCalculator />
      </CalculatorWrapper>
      <Article>
        <Title level={2} className="mb-4">
          {t('LedResistor.article.title')}
        </Title>
        <Paragraph>{t('LedResistor.article.paragraph')}</Paragraph>
        <Paragraph>{t('LedResistor.article.paragraph2')}</Paragraph>
      </Article>
    </>
  );
};

export default LedResistor;
