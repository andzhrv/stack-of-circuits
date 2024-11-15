import type { Metadata } from 'next';
import { setStaticParamsLocale } from 'next-international/server';

import { Article } from '@/components/entities/article';
import { CalculatorWrapper } from '@/components/features/calculator-wrapper';
import { MultivibratorCalculator } from '@/components/features/multivibrator-calculator';
import { Title } from '@/components/ui/title';
import { getI18n, getStaticParams } from '@/locales/server';
import { PageParams } from '@/types';
import { getAlternateURLs } from '@/utils/get-alternate-urls';

export const generateMetadata = async ({
  params: { lang }
}: PageParams): Promise<Metadata> => {
  const t = await getI18n();

  return {
    title: t('Multivibrator.title'),
    description: t('Multivibrator.description'),
    openGraph: {
      title: t('Multivibrator.title'),
      description: t('Multivibrator.description'),
      siteName: 'Stack of Circuits',
      locale: lang,
      type: 'website'
    },
    alternates: getAlternateURLs('/tools/multivibrator', lang)
  };
};

export const generateStaticParams = () => {
  return getStaticParams();
};

const Multivibrator = async ({ params: { lang } }: PageParams) => {
  setStaticParamsLocale(lang);

  const t = await getI18n();

  return (
    <>
      <Title className="mb-6 md:mb-10">{t('Multivibrator.title')}</Title>
      <CalculatorWrapper>
        <MultivibratorCalculator />
      </CalculatorWrapper>
      <Article>{t('Multivibrator.article')}</Article>
    </>
  );
};

export default Multivibrator;
