import type { Metadata } from 'next';
import { setStaticParamsLocale } from 'next-international/server';

import { Article } from '@/components/entities/article';
import { CalculatorWrapper } from '@/components/features/calculator-wrapper';
import { CapacitorCodeCalculator } from '@/components/features/capacitor-code-calculator';
import { Title } from '@/components/ui/title';
import { getI18n, getStaticParams } from '@/locales/server';
import { PageParams } from '@/types';
import { getAlternateURLs } from '@/utils/get-alternate-urls';

export const generateMetadata = async ({
  params: { lang }
}: PageParams): Promise<Metadata> => {
  const t = await getI18n();

  return {
    title: t('CapacitorCode.title'),
    description: t('CapacitorCode.description'),
    openGraph: {
      title: t('CapacitorCode.title'),
      description: t('CapacitorCode.description'),
      siteName: 'Stack of Circuits',
      locale: lang,
      type: 'website'
    },
    alternates: getAlternateURLs('/tools/capacitor-code', lang)
  };
};

export const generateStaticParams = () => {
  return getStaticParams();
};

const CapacitorCode = async ({ params: { lang } }: PageParams) => {
  setStaticParamsLocale(lang);

  const t = await getI18n();

  return (
    <>
      <Title className="mb-6 md:mb-10">{t('CapacitorCode.title')}</Title>
      <CalculatorWrapper>
        <CapacitorCodeCalculator />
      </CalculatorWrapper>
      <Article>{t('CapacitorCode.article')}</Article>
    </>
  );
};

export default CapacitorCode;
