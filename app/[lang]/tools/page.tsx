import { LinksList, LinksListItem } from '@/components/ui/links-list';
import { Title } from '@/components/ui/title';
import { getToolsLink } from '@/constants/tools-link';
import { getI18n } from '@/locales/server';

const Tools = async () => {
  const t = await getI18n();
  const toolsLink = await getToolsLink();

  return (
    <>
      <Title className="mb-6">{t('Tools.title')}</Title>
      <LinksList className="lg:grid-cols-[1fr_1fr]">
        {toolsLink.map(({ title, href, description }, i) => (
          <LinksListItem key={i} title={title} href={href}>
            {description}
          </LinksListItem>
        ))}
      </LinksList>
    </>
  );
};

export default Tools;
