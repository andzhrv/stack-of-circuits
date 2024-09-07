import type { Metadata } from 'next';
import { setStaticParamsLocale } from 'next-international/server';

import { Article } from '@/components/entities/article';
import { CalculatorWrapper } from '@/components/entities/calculator-wrapper';
import { VoltageRegulatorCalculator } from '@/components/features/voltage-regulator-calculator';
import { Title } from '@/components/ui/title';
import { getI18n, getStaticParams } from '@/locales/server';
import { PageParams } from '@/types';
import { getAlternateURLs } from '@/utils/get-alternate-urls';

export const generateMetadata = async ({
  params: { lang }
}: PageParams): Promise<Metadata> => {
  const t = await getI18n();

  return {
    title: t('VoltageRegulator.title'),
    description: t('VoltageRegulator.description'),
    openGraph: {
      title: t('VoltageRegulator.title'),
      description: t('VoltageRegulator.description'),
      siteName: 'Stack of Circuits',
      locale: lang,
      type: 'website'
    },
    alternates: getAlternateURLs('/tools/voltage-regulator', lang)
  };
};

export const generateStaticParams = () => {
  return getStaticParams();
};

const VoltageRegulator = async ({ params: { lang } }: PageParams) => {
  setStaticParamsLocale(lang);

  const t = await getI18n();

  return (
    <>
      <Title className="mb-6 md:mb-10">{t('VoltageRegulator.title')}</Title>
      <CalculatorWrapper>
        <VoltageRegulatorCalculator />
      </CalculatorWrapper>
      <Article>{t('VoltageRegulator.article')}</Article>
    </>
  );
};

export default VoltageRegulator;
