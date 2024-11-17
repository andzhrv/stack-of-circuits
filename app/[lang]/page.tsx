import type { Metadata } from 'next';
import Link from 'next/link';
import { setStaticParamsLocale } from 'next-international/server';

import { LinksList, LinksListItem } from '@/components/ui/links-list';
import { Title } from '@/components/ui/title';
import { getGuidesLink } from '@/constants/guides-link';
import { getToolsLink } from '@/constants/tools-link';
import { getI18n, getScopedI18n, getStaticParams } from '@/locales/server';
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

  const t = await getScopedI18n('Home');
  const toolsLink = await getToolsLink();
  const guidesLink = await getGuidesLink();

  return (
    <main>
      <Title className="mb-6">{t('title')}</Title>
      <Title className="mb-4" level={2}>
        {t('subtitle')}
      </Title>
      <Title className="pl-4 mt-2" level={3}>
        <Link href="/tools" legacyBehavior passHref>
          {t('tools')}
        </Link>
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
      <Title className="pl-4 mt-2" level={3}>
        <Link href="/guides" legacyBehavior passHref>
          {t('guides')}
        </Link>
      </Title>
      <LinksList>
        {guidesLink.map(({ title, href, description, Icon }, i) => (
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
