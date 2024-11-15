import type { Metadata } from 'next';
import { setStaticParamsLocale } from 'next-international/server';

import { Article } from '@/components/entities/article';
import { CalculatorWrapper } from '@/components/features/calculator-wrapper';
import { RCTimeConstantCalculator } from '@/components/features/rc-time-constant-calculator';
import { Title } from '@/components/ui/title';
import { getI18n, getStaticParams } from '@/locales/server';
import { PageParams } from '@/types';
import { getAlternateURLs } from '@/utils/get-alternate-urls';

export const generateMetadata = async ({
  params: { lang }
}: PageParams): Promise<Metadata> => {
  const t = await getI18n();

  return {
    title: t('RCTimeConstant.title'),
    description: t('RCTimeConstant.description'),
    openGraph: {
      title: t('RCTimeConstant.title'),
      description: t('RCTimeConstant.description'),
      siteName: 'Stack of Circuits',
      locale: lang,
      type: 'website'
    },
    alternates: getAlternateURLs('/tools/rc-time-constant', lang)
  };
};

export const generateStaticParams = () => {
  return getStaticParams();
};

const RCTimeConstant = async ({ params: { lang } }: PageParams) => {
  setStaticParamsLocale(lang);

  const t = await getI18n();

  return (
    <>
      <Title className="mb-6 md:mb-10">{t('RCTimeConstant.title')}</Title>
      <CalculatorWrapper>
        <RCTimeConstantCalculator />
      </CalculatorWrapper>
      <Article>{t('RCTimeConstant.article')}</Article>
    </>
  );
};

export default RCTimeConstant;
