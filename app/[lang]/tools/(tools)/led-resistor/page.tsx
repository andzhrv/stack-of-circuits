import type { Metadata } from 'next';
import { setStaticParamsLocale } from 'next-international/server';

import { CalculatorWrapper } from '@/components/entities/calculator-wrapper';
import { ImageWithInvert } from '@/components/entities/image-with-invert';
import { LedResistorCalculator } from '@/components/features/led-resistor-calculator';
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
    title: t('LedResistor.title'),
    description: t('LedResistor.description'),
    openGraph: {
      title: t('LedResistor.title'),
      description: t('LedResistor.description'),
      siteName: 'Stack of Circuits',
      locale: lang,
      type: 'website'
    },
    alternates: {
      languages: {
        en: '/tools/led-resistor',
        'x-default': '/tools/led-resistor',
        ru: '/ru/tools/led-resistor'
      }
    }
  };
};

export const generateStaticParams = () => {
  return getStaticParams();
};

const LedResistor = async ({
  params: { lang }
}: {
  params: { lang: string };
}) => {
  setStaticParamsLocale(lang);

  const t = await getI18n();

  return (
    <>
      <Title className="mb-6 md:mb-10">{t('LedResistor.title')}</Title>
      <CalculatorWrapper>
        <LedResistorCalculator />
      </CalculatorWrapper>
      <Article>
        <Title level={2} className="mb-4">
          {t('LedResistor.article.title')}
        </Title>
        <ImageWithInvert
          className="self-center"
          src="/led-resistor-diagram.png"
          width={300}
          height={200}
          alt="Circuit with LED and resistor"
        />
        <Paragraph>{t('LedResistor.article.paragraph')}</Paragraph>
        <Paragraph>{t('LedResistor.article.paragraph2')}</Paragraph>
      </Article>
    </>
  );
};

export default LedResistor;
