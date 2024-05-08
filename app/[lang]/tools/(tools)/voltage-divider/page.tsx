import type { Metadata } from 'next';
import { setStaticParamsLocale } from 'next-international/server';

import { Article } from '@/components/entities/article';
import { CalculatorWrapper } from '@/components/entities/calculator-wrapper';
import { VoltageDividerCalculator } from '@/components/features/voltage-divider-calculator';
import { Title } from '@/components/ui/title';
import { getI18n, getStaticParams } from '@/locales/server';

export const generateMetadata = async ({
  params: { lang }
}: {
  params: { lang: string };
}): Promise<Metadata> => {
  const t = await getI18n();

  return {
    title: t('VoltageDivider.title'),
    description: t('VoltageDivider.description'),
    openGraph: {
      title: t('VoltageDivider.title'),
      description: t('VoltageDivider.description'),
      siteName: 'Stack of Circuits',
      locale: lang,
      type: 'website'
    },
    alternates: {
      languages: {
        en: '/tools/voltage-divider',
        'x-default': '/tools/voltage-divider',
        ru: '/ru/tools/voltage-divider'
      }
    }
  };
};

export const generateStaticParams = () => {
  return getStaticParams();
};

const VoltageDivider = async ({
  params: { lang }
}: {
  params: { lang: string };
}) => {
  setStaticParamsLocale(lang);

  const t = await getI18n();

  return (
    <>
      <Title className="mb-6 md:mb-10">{t('VoltageDivider.title')}</Title>
      <CalculatorWrapper>
        <VoltageDividerCalculator />
      </CalculatorWrapper>
      <Article>{t('VoltageDivider.article')}</Article>
    </>
  );
};

export default VoltageDivider;
