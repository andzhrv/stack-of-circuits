import type { Metadata } from 'next';
import { setStaticParamsLocale } from 'next-international/server';

import { Article } from '@/components/entities/article';
import { CalculatorWrapper } from '@/components/features/calculator-wrapper';
import { PowerDissipationCalculator } from '@/components/features/power-dissipation-calculator';
import { Title } from '@/components/ui/title';
import { getI18n, getStaticParams } from '@/locales/server';
import { PageParams } from '@/types';
import { getAlternateURLs } from '@/utils/get-alternate-urls';

export const generateMetadata = async ({
  params: { lang }
}: PageParams): Promise<Metadata> => {
  const t = await getI18n();

  return {
    title: t('PowerDissipation.title'),
    description: t('PowerDissipation.description'),
    openGraph: {
      title: t('PowerDissipation.title'),
      description: t('PowerDissipation.description'),
      siteName: 'Stack of Circuits',
      locale: lang,
      type: 'website'
    },
    alternates: getAlternateURLs('/tools/power-dissipation', lang)
  };
};

export const generateStaticParams = () => {
  return getStaticParams();
};

const PowerDissipation = async ({ params: { lang } }: PageParams) => {
  setStaticParamsLocale(lang);

  const t = await getI18n();

  return (
    <>
      <Title className="mb-6 md:mb-10">{t('PowerDissipation.title')}</Title>
      <CalculatorWrapper>
        <PowerDissipationCalculator />
      </CalculatorWrapper>
      <Article>{t('PowerDissipation.article')}</Article>
    </>
  );
};

export default PowerDissipation;
