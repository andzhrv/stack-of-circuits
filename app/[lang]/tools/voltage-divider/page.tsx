import type { Metadata } from 'next';

import { CalculatorWrapper } from '@/components/entities/calculator-wrapper';
import { VoltageDividerCalculator } from '@/components/features/voltage-divider-calculator';
import { Article } from '@/components/ui/article';
import { Paragraph } from '@/components/ui/paragraph';
import { Title } from '@/components/ui/title';
import { getI18n } from '@/locales/server';

export const generateMetadata = async ({
  params: { lang }
}: {
  params: { lang: string };
}) => {
  const t = await getI18n();

  const metadata: Metadata = {
    title: `${t('VoltageDivider.title')} – Stack of Circuits`,
    description: t('VoltageDivider.description'),
    openGraph: {
      title: t('VoltageDivider.title'),
      description: t('VoltageDivider.description'),
      siteName: 'Stack of Circuits',
      locale: lang,
      type: 'website'
    }
  };

  return metadata;
};

const VoltageDivider = async () => {
  const t = await getI18n();

  return (
    <>
      <Title className="mb-6 md:mb-10">{t('VoltageDivider.title')}</Title>
      <CalculatorWrapper>
        <VoltageDividerCalculator />
      </CalculatorWrapper>
      <Article>
        <Title level={2} className="mb-4">
          {t('VoltageDivider.article.title')}
        </Title>
        <Paragraph>{t('VoltageDivider.article.paragraph')}</Paragraph>
      </Article>
    </>
  );
};

export default VoltageDivider;
