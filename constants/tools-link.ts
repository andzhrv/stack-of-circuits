import { ForwardRefExoticComponent, RefAttributes } from 'react';
import {
  Icon,
  IconBatteryAutomotive,
  IconCircuitCapacitor,
  IconCircuitDiode,
  IconCircuitDiodeZener,
  IconCircuitInductor,
  IconCircuitResistor,
  IconCircuitVoltmeter,
  IconCpu2,
  IconDivide,
  IconEqualDouble,
  IconNumber100Small,
  IconOmega,
  IconProps,
  IconRoute2,
  IconWaveSine,
  IconWaveSquare
} from '@tabler/icons-react';

import { getI18n } from '@/locales/server';

export const getToolsLink = async (): Promise<
  {
    title: string;
    href: string;
    description: string;
    Icon: ForwardRefExoticComponent<IconProps & RefAttributes<Icon>>;
  }[]
> => {
  const t = await getI18n();

  return [
    {
      title: t('LedResistor.title'),
      href: '/tools/led-resistor',
      description: t('LedResistor.description'),
      Icon: IconCircuitDiode
    },
    {
      title: t('ResistorColorCode.title'),
      href: '/tools/resistor-color-code',
      description: t('ResistorColorCode.description'),
      Icon: IconCircuitResistor
    },
    {
      title: t('SmdResistorCode.title'),
      href: '/tools/smd-resistor-code',
      description: t('SmdResistorCode.description'),
      Icon: IconNumber100Small
    },
    {
      title: t('InductorColorCode.title'),
      href: '/tools/inductor-color-code',
      description: t('InductorColorCode.description'),
      Icon: IconCircuitInductor
    },
    {
      title: t('OhmsLaw.title'),
      href: '/tools/ohms-law',
      description: t('OhmsLaw.description'),
      Icon: IconOmega
    },
    {
      title: t('ParallelEquivalence.title'),
      href: '/tools/parallel-equivalence',
      description: t('ParallelEquivalence.description'),
      Icon: IconEqualDouble
    },
    {
      title: t('SeriesEquivalence.title'),
      href: '/tools/series-equivalence',
      description: t('SeriesEquivalence.description'),
      Icon: IconEqualDouble
    },
    {
      title: t('VoltageDivider.title'),
      href: '/tools/voltage-divider',
      description: t('VoltageDivider.description'),
      Icon: IconDivide
    },
    {
      title: t('BatteryLife.title'),
      href: '/tools/battery-life',
      description: t('BatteryLife.description'),
      Icon: IconBatteryAutomotive
    },
    {
      title: t('VoltageRegulator.title'),
      href: '/tools/voltage-regulator',
      description: t('VoltageRegulator.description'),
      Icon: IconCircuitVoltmeter
    },
    {
      title: t('LCResonantFrequency.title'),
      href: '/tools/lc-resonant-frequency',
      description: t('LCResonantFrequency.description'),
      Icon: IconWaveSine
    },
    {
      title: t('RCTimeConstant.title'),
      href: '/tools/rc-time-constant',
      description: t('RCTimeConstant.description'),
      Icon: IconCircuitCapacitor
    },
    {
      title: t('CapacitorCode.title'),
      href: '/tools/capacitor-code',
      description: t('CapacitorCode.description'),
      Icon: IconCircuitCapacitor
    },
    {
      title: t('OperationalAmplifier.title'),
      href: '/tools/operational-amplifier',
      description: t('OperationalAmplifier.description'),
      Icon: IconCpu2
    },
    {
      title: t('Multivibrator.title'),
      href: '/tools/multivibrator',
      description: t('Multivibrator.description'),
      Icon: IconWaveSquare
    },
    {
      title: t('ZenerDiode.title'),
      href: '/tools/zener-diode',
      description: t('ZenerDiode.description'),
      Icon: IconCircuitDiodeZener
    },
    {
      title: t('WiresVoltageDrop.title'),
      href: '/tools/wires-voltage-drop',
      description: t('WiresVoltageDrop.description'),
      Icon: IconRoute2
    },
    {
      title: t('PowerDissipation.title'),
      href: '/tools/power-dissipation',
      description: t('PowerDissipation.description'),
      Icon: IconCircuitResistor
    }
  ];
};
