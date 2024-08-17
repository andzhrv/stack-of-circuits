import { getI18n } from '@/locales/server';

export const getToolsLink = async (): Promise<
  { title: string; href: string; description: string }[]
> => {
  const t = await getI18n();

  return [
    {
      title: t('LedResistor.title'),
      href: '/tools/led-resistor',
      description: t('LedResistor.description')
    },
    {
      title: t('ResistorColorCode.title'),
      href: '/tools/resistor-color-code',
      description: t('ResistorColorCode.description')
    },
    {
      title: t('SmdResistorCode.title'),
      href: '/tools/smd-resistor-code',
      description: t('SmdResistorCode.description')
    },
    {
      title: t('InductorColorCode.title'),
      href: '/tools/inductor-color-code',
      description: t('InductorColorCode.description')
    },
    {
      title: t('OhmsLaw.title'),
      href: '/tools/ohms-law',
      description: t('OhmsLaw.description')
    },
    {
      title: t('ParallelEquivalence.title'),
      href: '/tools/parallel-equivalence',
      description: t('ParallelEquivalence.description')
    },
    {
      title: t('SeriesEquivalence.title'),
      href: '/tools/series-equivalence',
      description: t('SeriesEquivalence.description')
    },
    {
      title: t('VoltageDivider.title'),
      href: '/tools/voltage-divider',
      description: t('VoltageDivider.description')
    },
    {
      title: t('BatteryLife.title'),
      href: '/tools/battery-life',
      description: t('BatteryLife.description')
    },
    {
      title: t('VoltageRegulator.title'),
      href: '/tools/voltage-regulator',
      description: t('VoltageRegulator.description')
    },
    {
      title: t('LCResonantFrequency.title'),
      href: '/tools/lc-resonant-frequency',
      description: t('LCResonantFrequency.description')
    }
  ];
};
