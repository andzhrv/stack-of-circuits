import type { Metadata } from 'next';

import { CalculatorWrapper } from '@/components/entities/calculator-wrapper';
import { SmdResistorCodeCalculator } from '@/components/features/smd-resistor-code-calculator';
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
    title: `${t('SmdResistorCode.title')} – Stack of Circuits`,
    description: t('SmdResistorCode.description'),
    openGraph: {
      title: t('SmdResistorCode.title'),
      description: t('SmdResistorCode.description'),
      siteName: 'Stack of Circuits',
      locale: lang,
      type: 'website'
    }
  };

  return metadata;
};

const SmdResistorCode = async () => {
  const t = await getI18n();

  return (
    <>
      <Title className="mb-6 md:mb-10">{t('SmdResistorCode.title')}</Title>
      <CalculatorWrapper>
        <SmdResistorCodeCalculator />
      </CalculatorWrapper>
      <Article>
        <Title level={2} className="mb-4">
          {t('SmdResistorCode.article.title')}
        </Title>
        <Paragraph>{t('SmdResistorCode.article.paragraph')}</Paragraph>
      </Article>
    </>
  );
};

export default SmdResistorCode;
