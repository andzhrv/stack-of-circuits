import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from '@/components/ui/link';
import { getI18n } from '@/locales/server';

export const PopularToolsCard = async () => {
  const t = await getI18n();

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t('PopularToolsCard.title')}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul>
          <li className="mb-2">
            <Link className="text-sm" href="/tools/led-resistor">
              {t('LedResistor.title')}
            </Link>
          </li>
          <li className="mb-2">
            <Link className="text-sm" href="/tools/resistor-color-code">
              {t('ResistorColorCode.title')}
            </Link>
          </li>
          <li className="mb-2">
            <Link className="text-sm" href="/tools/parallel-equivalence">
              {t('ParallelEquivalence.title')}
            </Link>
          </li>
          <li>
            <Link className="text-sm" href="/tools/battery-life">
              {t('BatteryLife.title')}
            </Link>
          </li>
        </ul>
      </CardContent>
    </Card>
  );
};
