import type { Metadata } from 'next';
import { setStaticParamsLocale } from 'next-international/server';

import { Article } from '@/components/entities/article';
import { CalculatorWrapper } from '@/components/entities/calculator-wrapper';
import { OperationalAmplifierCalculator } from '@/components/features/operational-amplifier-calculator';
import { Title } from '@/components/ui/title';
import { getI18n, getStaticParams } from '@/locales/server';
import { PageParams } from '@/types';
import { getAlternateURLs } from '@/utils/get-alternate-urls';

export const generateMetadata = async ({
  params: { lang }
}: PageParams): Promise<Metadata> => {
  const t = await getI18n();

  return {
    title: t('OperationalAmplifier.title'),
    description: t('OperationalAmplifier.description'),
    openGraph: {
      title: t('OperationalAmplifier.title'),
      description: t('OperationalAmplifier.description'),
      siteName: 'Stack of Circuits',
      locale: lang,
      type: 'website'
    },
    alternates: getAlternateURLs('/tools/operational-amplifier', lang)
  };
};

export const generateStaticParams = () => {
  return getStaticParams();
};

const OperationalAmplifier = async ({ params: { lang } }: PageParams) => {
  setStaticParamsLocale(lang);

  const t = await getI18n();

  return (
    <>
      <Title className="mb-6 md:mb-10">{t('OperationalAmplifier.title')}</Title>
      <CalculatorWrapper>
        <OperationalAmplifierCalculator />
      </CalculatorWrapper>
      <Article>{t('OperationalAmplifier.article')}</Article>
    </>
  );
};

export default OperationalAmplifier;
