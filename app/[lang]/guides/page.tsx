import type { Metadata } from 'next';
import { setStaticParamsLocale } from 'next-international/server';

import { LinksList, LinksListItem } from '@/components/ui/links-list';
import { Title } from '@/components/ui/title';
import { getGuidesLink } from '@/constants/guides-link';
import { getI18n, getStaticParams } from '@/locales/server';
import { PageParams } from '@/types';
import { getAlternateURLs } from '@/utils/get-alternate-urls';

export const generateMetadata = async ({
  params: { lang }
}: PageParams): Promise<Metadata> => {
  const t = await getI18n();

  return {
    title: t('Guides.title'),
    description: t('Guides.description'),
    openGraph: {
      title: t('Guides.title'),
      description: t('Guides.description'),
      siteName: 'Stack of Circuits',
      locale: lang,
      type: 'website'
    },
    alternates: getAlternateURLs('/guides', lang)
  };
};

export const generateStaticParams = () => {
  return getStaticParams();
};

const Guides = async ({ params: { lang } }: { params: { lang: string } }) => {
  setStaticParamsLocale(lang);

  const t = await getI18n();
  const guidesLink = await getGuidesLink();

  return (
    <main>
      <Title className="mb-6">{t('Guides.title')}</Title>
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

export default Guides;
