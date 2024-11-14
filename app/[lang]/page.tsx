import type { Metadata } from 'next';
import { setStaticParamsLocale } from 'next-international/server';

import { LinksList, LinksListItem } from '@/components/ui/links-list';
import { Title } from '@/components/ui/title';
import { getToolsLink } from '@/constants/tools-link';
import { getI18n, getStaticParams } from '@/locales/server';
import { PageParams } from '@/types';
import { getAlternateURLs } from '@/utils/get-alternate-urls';

export const generateMetadata = async ({
  params: { lang }
}: PageParams): Promise<Metadata> => {
  const t = await getI18n();

  return {
    title: `${t('Root.title')} / Stack of Circuits`,
    description: t('Root.description'),
    openGraph: {
      title: t('Root.title'),
      description: t('Root.description'),
      url: '/',
      siteName: 'Stack of Circuits',
      locale: lang,
      type: 'website'
    },
    alternates: getAlternateURLs('/', lang)
  };
};

export const generateStaticParams = () => {
  return getStaticParams();
};

const Home = async ({ params: { lang } }: { params: { lang: string } }) => {
  setStaticParamsLocale(lang);

  const t = await getI18n();
  const toolsLink = await getToolsLink();

  return (
    <main>
      <Title className="mb-6">{t('Home.title')}</Title>
      <Title className="mb-4" level={2}>
        {t('Home.subtitle')}
      </Title>
      <LinksList>
        {toolsLink.map(({ title, href, description, Icon }, i) => (
          <LinksListItem
            key={i}
            title={title}
            description={description}
            href={href}
          >
            <Icon className="w-10 h-10" stroke={1.5} />
          </LinksListItem>
        ))}
      </LinksList>
    </main>
  );
};

export default Home;
