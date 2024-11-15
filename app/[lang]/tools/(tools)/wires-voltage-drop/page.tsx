import type { Metadata } from 'next';
import { setStaticParamsLocale } from 'next-international/server';

import { Article } from '@/components/entities/article';
import { CalculatorWrapper } from '@/components/features/calculator-wrapper';
import { WiresVoltageDropCalculator } from '@/components/features/wires-voltage-drop-calculator';
import { Title } from '@/components/ui/title';
import { getI18n, getStaticParams } from '@/locales/server';
import { PageParams } from '@/types';
import { getAlternateURLs } from '@/utils/get-alternate-urls';

export const generateMetadata = async ({
  params: { lang }
}: PageParams): Promise<Metadata> => {
  const t = await getI18n();

  return {
    title: t('WiresVoltageDrop.title'),
    description: t('WiresVoltageDrop.description'),
    openGraph: {
      title: t('WiresVoltageDrop.title'),
      description: t('WiresVoltageDrop.description'),
      siteName: 'Stack of Circuits',
      locale: lang,
      type: 'website'
    },
    alternates: getAlternateURLs('/tools/wires-voltage-drop', lang)
  };
};

export const generateStaticParams = () => {
  return getStaticParams();
};

const WiresVoltageDrop = async ({ params: { lang } }: PageParams) => {
  setStaticParamsLocale(lang);

  const t = await getI18n();

  return (
    <>
      <Title className="mb-6 md:mb-10">{t('WiresVoltageDrop.title')}</Title>
      <CalculatorWrapper>
        <WiresVoltageDropCalculator />
      </CalculatorWrapper>
      <Article>{t('WiresVoltageDrop.article')}</Article>
    </>
  );
};

export default WiresVoltageDrop;
