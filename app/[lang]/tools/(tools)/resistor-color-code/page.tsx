import type { Metadata } from 'next';
import { setStaticParamsLocale } from 'next-international/server';

import { Article } from '@/components/entities/article';
import { CalculatorWrapper } from '@/components/entities/calculator-wrapper';
import { ResistorColorCodeCalculator } from '@/components/features/resistor-color-code-calculator';
import { Title } from '@/components/ui/title';
import { getI18n, getStaticParams } from '@/locales/server';
import { getAlternateURLs } from '@/utils/get-alternate-urls';

export const generateMetadata = async ({
  params: { lang }
}: {
  params: { lang: string };
}): Promise<Metadata> => {
  const t = await getI18n();

  return {
    title: t('ResistorColorCode.title'),
    description: t('ResistorColorCode.description'),
    openGraph: {
      title: t('ResistorColorCode.title'),
      description: t('ResistorColorCode.description'),
      siteName: 'Stack of Circuits',
      locale: lang,
      type: 'website'
    },
    alternates: getAlternateURLs('/tools/resistor-color-code', lang)
  };
};

export const generateStaticParams = () => {
  return getStaticParams();
};

const ResistorColorCode = async ({
  params: { lang }
}: {
  params: { lang: string };
}) => {
  setStaticParamsLocale(lang);

  const t = await getI18n();

  return (
    <>
      <Title className="mb-6 md:mb-10">{t('ResistorColorCode.title')}</Title>
      <CalculatorWrapper>
        <ResistorColorCodeCalculator />
      </CalculatorWrapper>
      <Article>{t('ResistorColorCode.article')}</Article>
    </>
  );
};

export default ResistorColorCode;
