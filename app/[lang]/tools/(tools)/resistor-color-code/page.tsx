import type { Metadata } from 'next';

import { CalculatorWrapper } from '@/components/entities/calculator-wrapper';
import { ResistorColorCodeCalculator } from '@/components/features/resistor-color-code-calculator';
import { Article } from '@/components/ui/article';
import { Paragraph } from '@/components/ui/paragraph';
import { Title } from '@/components/ui/title';
import { getI18n } from '@/locales/server';

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
    alternates: {
      languages: {
        en: '/tools/resistor-color-code',
        'x-default': '/tools/resistor-color-code',
        ru: '/ru/tools/resistor-color-code'
      }
    }
  };
};

const ResistorColorCode = async () => {
  const t = await getI18n();

  return (
    <>
      <Title className="mb-6 md:mb-10">{t('ResistorColorCode.title')}</Title>
      <CalculatorWrapper>
        <ResistorColorCodeCalculator />
      </CalculatorWrapper>
      <Article>
        <Title level={2} className="mb-4">
          {t('ResistorColorCode.article.title')}
        </Title>
        <Paragraph>{t('ResistorColorCode.article.paragraph')}</Paragraph>
      </Article>
    </>
  );
};

export default ResistorColorCode;
