'use client';

import { useEffect, useState } from 'react';

import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Statistic } from '@/components/ui/statistic';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useFormatTime } from '@/hooks/use-format-time';
import { Unit, useFormatUnits } from '@/hooks/use-format-units';
import { useNumberInput } from '@/hooks/use-number-input';
import { useTrackResultChange } from '@/hooks/use-track-result-change';
import { useScopedI18n } from '@/locales/client';

import { calculateResonantTimeConstant } from './utils';

export const RCTimeConstantCalculator = () => {
  const formatUnits = useFormatUnits();
  const formatTime = useFormatTime();
  const t = useScopedI18n('RCTimeConstantCalculator');
  const [valueToCalculate, setValueToCalculate] = useState<
    'resistance' | 'capacitance' | 'time-constant'
  >('time-constant');

  const [resistanceValue, resistanceValueProps] = useNumberInput({
    initialValue: '1200',
    minValue: 0,
    maxValue: 10000000000
  });

  const [capacitanceValue, capacitanceValueProps] = useNumberInput({
    initialValue: '100',
    minValue: 0,
    maxValue: 10000000000
  });

  const [timeConstantValue, timeConstantValueProps] = useNumberInput({
    initialValue: '',
    minValue: 0,
    maxValue: 10000000000
  });

  const [voltageValue, voltageValueProps] = useNumberInput({
    initialValue: '12',
    minValue: 0,
    maxValue: 10000000000
  });

  const { resistance, capacitance, timeConstant, maxCurrent, charge } =
    calculateResonantTimeConstant({
      voltage: voltageValue,
      resistance: resistanceValue,
      capacitance: capacitanceValue,
      timeConstant: timeConstantValue,
      valueToCalculate
    });

  useTrackResultChange('rc-time-constant-change', timeConstant);

  useEffect(() => {
    if (valueToCalculate === 'resistance') {
      resistanceValueProps.onChange(resistance ?? 0);
    } else if (valueToCalculate === 'capacitance') {
      capacitanceValueProps.onChange(capacitance ?? 0);
    } else if (valueToCalculate === 'time-constant') {
      timeConstantValueProps.onChange(timeConstant ?? 0);
    }
  }, [resistance, capacitance, timeConstant, valueToCalculate]);

  return (
    <>
      {/* @ts-expect-error fix typing of onValueChange */}
      <Tabs value={valueToCalculate} onValueChange={setValueToCalculate}>
        <TabsList className="grid w-full grid-cols-3 mb-2">
          <TabsTrigger value="time-constant">
            {t('mode.timeConstant')}
          </TabsTrigger>
          <TabsTrigger value="capacitance">{t('mode.capacitance')}</TabsTrigger>
          <TabsTrigger value="resistance">{t('mode.resistance')}</TabsTrigger>
        </TabsList>
      </Tabs>
      <Card>
        <CardContent>
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
          {valueToCalculate !== 'capacitance' ? (
            <Label className="block mb-4 md:mb-5">
              {t('form.capacitance')}
              <Input
                className="mt-2"
                {...capacitanceValueProps}
                rightSection={t('form.capacitanceUnit')}
              />
            </Label>
          ) : null}
          {valueToCalculate !== 'time-constant' ? (
            <Label className="block mb-4 md:mb-5">
              {t('form.timeConstant')}
              <Input
                className="mt-2"
                {...timeConstantValueProps}
                rightSection={t('form.timeConstantUnit')}
              />
            </Label>
          ) : null}
          <Label className="block mb-4 md:mb-5">
            {t('form.voltage')}
            <Input
              className="mt-2"
              {...voltageValueProps}
              rightSection={t('form.voltageUnit')}
            />
          </Label>
        </CardContent>
        <CardFooter className="flex flex-col items-start">
          {valueToCalculate === 'resistance' ? (
            <Statistic
              className="mb-2"
              title={t('result.resistance')}
              value={formatUnits(resistance, Unit.Resistance)}
            />
          ) : null}
          {valueToCalculate === 'capacitance' ? (
            <Statistic
              className="mb-2"
              title={t('result.capacitance')}
              value={formatUnits(capacitance, Unit.Capacity, 2)}
            />
          ) : null}
          {valueToCalculate === 'time-constant' ? (
            <Statistic
              className="mb-2"
              title={t('result.timeConstant')}
              value={formatTime(
                timeConstant ? timeConstant / 1000 : undefined,
                'microseconds'
              )}
            />
          ) : null}
          <Statistic
            className="mb-2"
            title={t('result.maxCurrent')}
            value={formatUnits(maxCurrent, Unit.Current, 2)}
          />
          <Statistic
            title={t('result.charge')}
            value={formatUnits(charge, Unit.Charge, 3)}
          />
        </CardFooter>
      </Card>
    </>
  );
};
