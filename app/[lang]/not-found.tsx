import { Link } from '@/components/ui/link';
import { Separator } from '@/components/ui/separator';
import { getI18n } from '@/locales/server';

const NotFound = async () => {
  const t = await getI18n();

  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-8xl font-light">404</h2>
      <Separator className="my-8" />
      <p className="text-xl mb-2">{t('NotFound.title')}</p>
      <Link href="/">{t('NotFound.link')}</Link>
    </div>
  );
};

export default NotFound;
