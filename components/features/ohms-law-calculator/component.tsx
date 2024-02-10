'use client';

import { useEffect, useState } from 'react';

import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Statistic } from '@/components/ui/statistic';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useNumberInput } from '@/hooks/use-number-input';
import { useScopedI18n } from '@/locales/client';
import { Unit, useFormatUnits } from '@/utils/format-units';

import { calculateOhmsLaw } from './utils';

export const OhmsLawCalculator = () => {
  const formatUnits = useFormatUnits();
  const t = useScopedI18n('OhmsLawCalculator');
  const [valueToCalculate, setValueToCalculate] = useState('voltage');

  const [voltageValue, voltageValueProps] = useNumberInput({
    initialValue: '5',
    minValue: 0,
    maxValue: 100000
  });

  const [currentValue, currentValueProps] = useNumberInput({
    initialValue: '0,25',
    minValue: 0,
    maxValue: 100000
  });

  const [resistanceValue, resistanceValueProps] = useNumberInput({
    initialValue: '20',
    minValue: 0,
    maxValue: 100000
  });

  const { voltage, current, resistance, power } = calculateOhmsLaw({
    voltage: voltageValue,
    current: currentValue,
    resistance: resistanceValue,
    valueToCalculate
  });

  useEffect(() => {
    if (valueToCalculate === 'voltage') {
      voltageValueProps.onChange(voltage ?? 0);
    } else if (valueToCalculate === 'current') {
      currentValueProps.onChange(current ?? 0);
    } else if (valueToCalculate === 'resistance') {
      resistanceValueProps.onChange(resistance ?? 0);
    }
  }, [voltage, current, resistance]);

  return (
    <>
      <Tabs value={valueToCalculate} onValueChange={setValueToCalculate}>
        <TabsList className="grid w-full grid-cols-3 mb-2">
          <TabsTrigger value="voltage">{t('mode.voltage')}</TabsTrigger>
          <TabsTrigger value="current">{t('mode.current')}</TabsTrigger>
          <TabsTrigger value="resistance">{t('mode.resistance')}</TabsTrigger>
        </TabsList>
      </Tabs>
      <Card>
        <CardContent>
          {valueToCalculate !== 'voltage' ? (
            <Label className="block mb-4 md:mb-5">
              {t('form.voltage')}
              <Input
                className="mt-2"
                {...voltageValueProps}
                rightSection={t('form.voltageUnit')}
              />
            </Label>
          ) : null}
          {valueToCalculate !== 'current' ? (
            <Label className="block mb-4 md:mb-5">
              {t('form.current')}
              <Input
                className="mt-2"
                {...currentValueProps}
                rightSection={t('form.currentUnit')}
              />
            </Label>
          ) : null}
          {valueToCalculate !== 'resistance' ? (
            <Label className="block mb-4 md:mb-5">
              {t('form.resistance')}
              <Input
                className="mt-2"
                {...resistanceValueProps}
                rightSection={t('form.resistanceUnit')}
              />
            </Label>
          ) : null}
        </CardContent>
        <CardFooter className="flex flex-col items-start">
          {valueToCalculate === 'voltage' ? (
            <Statistic
              title={t('result.voltage')}
              value={formatUnits(voltage, Unit.Voltage, 1)}
            />
          ) : null}
          {valueToCalculate === 'current' ? (
            <Statistic
              title={t('result.current')}
              value={formatUnits(current, Unit.Current, 2)}
            />
          ) : null}
          {valueToCalculate === 'resistance' ? (
            <Statistic
              title={t('result.resistance')}
              value={formatUnits(resistance, Unit.Resistance)}
            />
          ) : null}
          <Statistic
            title={t('result.power')}
            value={formatUnits(power, Unit.Power, 1)}
          />
        </CardFooter>
      </Card>
    </>
  );
};
