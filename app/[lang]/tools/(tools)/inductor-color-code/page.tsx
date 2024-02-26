import type { Metadata } from 'next';
import { setStaticParamsLocale } from 'next-international/server';

import { CalculatorWrapper } from '@/components/entities/calculator-wrapper';
import { InductorColorCodeCalculator } from '@/components/features/inductor-color-code-calculator';
import { Article } from '@/components/ui/article';
import { Paragraph } from '@/components/ui/paragraph';
import { Title } from '@/components/ui/title';
import { getI18n, getStaticParams } from '@/locales/server';

export const generateMetadata = async ({
  params: { lang }
}: {
  params: { lang: string };
}): Promise<Metadata> => {
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
    alternates: {
      languages: {
        en: '/tools/inductor-color-code',
        'x-default': '/tools/inductor-color-code',
        ru: '/ru/tools/inductor-color-code'
      }
    }
  };
};

export const generateStaticParams = () => {
  return getStaticParams();
};

const InductorColorCode = async ({
  params: { lang }
}: {
  params: { lang: string };
}) => {
  setStaticParamsLocale(lang);

  const t = await getI18n();

  return (
    <>
      <Title className="mb-6 md:mb-10">{t('InductorColorCode.title')}</Title>
      <CalculatorWrapper>
        <InductorColorCodeCalculator />
      </CalculatorWrapper>
      <Article>
        <Title level={2} className="mb-4">
          {t('InductorColorCode.article.title')}
        </Title>
        <Paragraph>{t('InductorColorCode.article.paragraph')}</Paragraph>
      </Article>
    </>
  );
};

export default InductorColorCode;
