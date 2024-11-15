import type { Metadata } from 'next';
import { setStaticParamsLocale } from 'next-international/server';

import { Article } from '@/components/entities/article';
import { CalculatorWrapper } from '@/components/features/calculator-wrapper';
import { InductorColorCodeCalculator } from '@/components/features/inductor-color-code-calculator';
import { Title } from '@/components/ui/title';
import { getI18n, getStaticParams } from '@/locales/server';
import { PageParams } from '@/types';
import { getAlternateURLs } from '@/utils/get-alternate-urls';

export const generateMetadata = async ({
  params: { lang }
}: PageParams): Promise<Metadata> => {
  const t = await getI18n();

  return {
    title: t('InductorColorCode.title'),
    description: t('InductorColorCode.description'),
    openGraph: {
      title: t('InductorColorCode.title'),
      description: t('InductorColorCode.description'),
      siteName: 'Stack of Circuits',
      locale: lang,
      type: 'website'
    },
    alternates: getAlternateURLs('/tools/inductor-color-code', lang)
  };
};

export const generateStaticParams = () => {
  return getStaticParams();
};

const InductorColorCode = async ({ params: { lang } }: PageParams) => {
  setStaticParamsLocale(lang);

  const t = await getI18n();

  return (
    <>
      <Title className="mb-6 md:mb-10">{t('InductorColorCode.title')}</Title>
      <CalculatorWrapper>
        <InductorColorCodeCalculator />
      </CalculatorWrapper>
      <Article>{t('InductorColorCode.article')}</Article>
    </>
  );
};

export default InductorColorCode;
