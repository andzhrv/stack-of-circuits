import type { Metadata } from 'next';

import { CalculatorWrapper } from '@/components/entities/calculator-wrapper';
import { BatteryLifeCalculator } from '@/components/features/battery-life-calculator';
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
    title: `${t('BatteryLife.title')} – Stack of Circuits`,
    description: t('BatteryLife.description'),
    openGraph: {
      title: t('BatteryLife.title'),
      description: t('BatteryLife.description'),
      siteName: 'Stack of Circuits',
      locale: lang,
      type: 'website'
    }
  };

  return metadata;
};

const BatteryLife = async () => {
  const t = await getI18n();

  return (
    <>
      <Title className="mb-6 md:mb-10">{t('BatteryLife.title')}</Title>
      <CalculatorWrapper>
        <BatteryLifeCalculator />
      </CalculatorWrapper>
      <Article>
        <Title level={2} className="mb-4">
          {t('BatteryLife.article.title')}
        </Title>
        <Paragraph>{t('BatteryLife.article.paragraph')}</Paragraph>
      </Article>
    </>
  );
};

export default BatteryLife;
