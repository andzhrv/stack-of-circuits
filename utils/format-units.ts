import { useScopedI18n } from '@/locales/client';

export const enum Unit {
  Voltage = 'voltage',
  Current = 'current',
  Resistance = 'resistance',
  Capacity = 'capacity',
  Inductance = 'inductance',
  Power = 'power'
}

const getValueExp = (value: number, maxExp: number): number => {
  if (value < 1) {
    return 0;
  }

  const exp = Math.floor(Math.log10(value) / Math.log10(1000));

  if (exp > maxExp) {
    return maxExp;
  }

  return exp;
};

export const useFormatUnits = () => {
  const t = useScopedI18n('useFormatUnits');

  const units: Record<Unit, string[]> = {
    [Unit.Voltage]: t('voltage').split('.'),
    [Unit.Current]: t('current').split('.'),
    [Unit.Resistance]: t('resistance').split('.'),
    [Unit.Capacity]: t('capacity').split('.'),
    [Unit.Inductance]: t('inductance').split('.'),
    [Unit.Power]: t('power').split('.')
  };

  return (
    value: number | undefined,
    unit: Unit,
    unitNumber: number = 0
  ): string => {
    if (typeof value !== 'number' || isNaN(value) || value < 0) {
      return '\u2014';
    }

    const reducedValue = value * 1000 ** unitNumber;

    const exp = getValueExp(reducedValue, units[unit].length - 1);

    const formattedValue =
      Math.round((reducedValue / 1000 ** exp) * 1000) / 1000;

    return `${formattedValue} ${units[unit][exp]}`;
  };
};
