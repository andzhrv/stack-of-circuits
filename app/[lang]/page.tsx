import { LinksList, LinksListItem } from '@/components/ui/links-list';
import { Title } from '@/components/ui/title';
import { getToolsLink } from '@/constants/tools-link';
import { getI18n } from '@/locales/server';

const Home = async () => {
  const t = await getI18n();
  const toolsLink = await getToolsLink();

  return (
    <div>
      <Title className="mb-6">{t('Home.title')}</Title>
      <Title className="mb-4" level={2}>
        {t('Home.subtitle')}
      </Title>
      <LinksList>
        {toolsLink.map(({ title, href, description }, i) => (
          <LinksListItem key={i} title={title} href={href}>
            {description}
          </LinksListItem>
        ))}
      </LinksList>
    </div>
  );
};

export default Home;
