import type { Metadata } from 'next';
import { setStaticParamsLocale } from 'next-international/server';

import { Article } from '@/components/entities/article';
import { CalculatorWrapper } from '@/components/entities/calculator-wrapper';
import { BatteryLifeCalculator } from '@/components/features/battery-life-calculator';
import { Title } from '@/components/ui/title';
import { getI18n, getStaticParams } from '@/locales/server';
import { PageParams } from '@/types';
import { getAlternateURLs } from '@/utils/get-alternate-urls';

export const generateMetadata = async ({
  params: { lang }
}: PageParams): Promise<Metadata> => {
  const t = await getI18n();

  return {
    title: t('BatteryLife.title'),
    description: t('BatteryLife.description'),
    openGraph: {
      title: t('BatteryLife.title'),
      description: t('BatteryLife.description'),
      siteName: 'Stack of Circuits',
      locale: lang,
      type: 'website'
    },
    alternates: getAlternateURLs('/tools/battery-life', lang)
  };
};

export const generateStaticParams = () => {
  return getStaticParams();
};

const BatteryLife = async ({ params: { lang } }: PageParams) => {
  setStaticParamsLocale(lang);

  const t = await getI18n();

  return (
    <>
      <Title className="mb-6 md:mb-10">{t('BatteryLife.title')}</Title>
      <CalculatorWrapper>
        <BatteryLifeCalculator />
      </CalculatorWrapper>
      <Article>{t('BatteryLife.article')}</Article>
    </>
  );
};

export default BatteryLife;
