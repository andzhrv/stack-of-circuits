import type { Metadata } from 'next';
import { setStaticParamsLocale } from 'next-international/server';

import { Article } from '@/components/entities/article';
import { CalculatorWrapper } from '@/components/features/calculator-wrapper';
import { SmdResistorCodeCalculator } from '@/components/features/smd-resistor-code-calculator';
import { Title } from '@/components/ui/title';
import { getI18n, getStaticParams } from '@/locales/server';
import { PageParams } from '@/types';
import { getAlternateURLs } from '@/utils/get-alternate-urls';

export const generateMetadata = async ({
  params: { lang }
}: PageParams): Promise<Metadata> => {
  const t = await getI18n();

  return {
    title: t('SmdResistorCode.title'),
    description: t('SmdResistorCode.description'),
    openGraph: {
      title: t('SmdResistorCode.title'),
      description: t('SmdResistorCode.description'),
      siteName: 'Stack of Circuits',
      locale: lang,
      type: 'website'
    },
    alternates: getAlternateURLs('/tools/smd-resistor-code', lang)
  };
};

export const generateStaticParams = () => {
  return getStaticParams();
};

const SmdResistorCode = async ({ params: { lang } }: PageParams) => {
  setStaticParamsLocale(lang);

  const t = await getI18n();

  return (
    <>
      <Title className="mb-6 md:mb-10">{t('SmdResistorCode.title')}</Title>
      <CalculatorWrapper>
        <SmdResistorCodeCalculator />
      </CalculatorWrapper>
      <Article>{t('SmdResistorCode.article')}</Article>
    </>
  );
};

export default SmdResistorCode;
