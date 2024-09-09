'use client';

import { useEffect, useState } from 'react';

import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Statistic } from '@/components/ui/statistic';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useNumberInput } from '@/hooks/use-number-input';
import { useTrackResultChange } from '@/hooks/use-track-result-change';
import { useScopedI18n } from '@/locales/client';
import { Unit, useFormatUnits } from '@/utils/format-units';

import { calculateFrequencyValue, calculateResistorValue } from './utils';

export const MultivibratorCalculator = () => {
  const formatUnits = useFormatUnits();
  const t = useScopedI18n('MultivibratorCalculator');
  const [valueToCalculate, setValueToCalculate] = useState('components');
  const [manualCapacitor, setManualCapacitor] = useState<
    boolean | 'indeterminate'
  >(false);

  const [frequency, frequencyProps] = useNumberInput({
    initialValue: '120',
    minValue: 0,
    maxValue: 1000000
  });

  const [dutyCycle, dutyCycleProps] = useNumberInput({
    initialValue: '60',
    minValue: 5,
    maxValue: 95
  });

  const [resistorA, resistorAProps] = useNumberInput({
    initialValue: '120',
    minValue: 0,
    maxValue: 10000000000
  });

  const [resistorB, resistorBProps] = useNumberInput({
    initialValue: '60',
    minValue: 0,
    maxValue: 10000000000
  });

  const [capacitor, capacitorProps] = useNumberInput({
    initialValue: '60',
    minValue: 0,
    maxValue: 10000000000
  });

  const {
    resistorAValue,
    resistorBValue,
    capacitorValue,
    isFrequencyError,
    isDutyCycleError
  } = calculateResistorValue(
    frequency,
    dutyCycle,
    manualCapacitor ? capacitor : undefined
  );

  const { frequencyValue, dutyCycleValue } = calculateFrequencyValue(
    resistorA,
    resistorB,
    capacitor
  );

  useTrackResultChange('multivibrator-change', resistorAValue);

  useEffect(() => {
    if (valueToCalculate === 'components') {
      resistorAProps.onChange(resistorAValue ?? 0);
      resistorBProps.onChange(resistorBValue ?? 0);
      capacitorProps.onChange(capacitorValue ?? 0);
    } else if (valueToCalculate === 'frequency') {
      frequencyProps.onChange(frequencyValue ?? 0);
      dutyCycleProps.onChange(dutyCycleValue ?? 0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    valueToCalculate,
    resistorAValue,
    resistorBValue,
    capacitorValue,
    frequencyValue,
    dutyCycleValue
  ]);

  return (
    <Tabs value={valueToCalculate} onValueChange={setValueToCalculate}>
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="components">{t('mode.components')}</TabsTrigger>
        <TabsTrigger value="frequency">{t('mode.frequency')}</TabsTrigger>
      </TabsList>
      <TabsContent value="components">
        <Card>
          <CardContent>
            <Label className="block mb-4 md:mb-5">
              {t('form.frequency')}
              <Input
                className="mt-2"
                {...frequencyProps}
                rightSection={t('form.frequencyUnit')}
              />
              {isFrequencyError ? (
                <div className="mt-1 text-sm text-red-400">
                  {t('form.frequencyErrorMsg')}
                </div>
              ) : null}
            </Label>
            <Label className="block mb-4 md:mb-5">
              {t('form.dutyCycle')}
              <Input
                className="mt-2"
                {...dutyCycleProps}
                rightSection={t('form.dutyCycleUnit')}
              />
              {isDutyCycleError ? (
                <div className="mt-1 text-sm text-red-400">
                  {t('form.dutyCycleErrorMsg')}
                </div>
              ) : null}
            </Label>
            <div className="flex items-center space-x-2">
              <Checkbox
                checked={manualCapacitor}
                onCheckedChange={setManualCapacitor}
                id="manual-capacitor"
              />
              <label
                htmlFor="manual-capacitor"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {t('form.manualCapacitor')}
              </label>
            </div>
            {manualCapacitor ? (
              <Label className="block mt-4 md:mt-5">
                {t('form.capacitor')}
                <Input
                  className="mt-2"
                  {...capacitorProps}
                  rightSection={t('form.capacitorUnit')}
                />
              </Label>
            ) : null}
          </CardContent>
          <CardFooter className="flex flex-col items-start">
            <Statistic
              className="mb-2"
              title={t('result.resistorA')}
              value={formatUnits(resistorAValue, Unit.Resistance)}
            />
            <Statistic
              className="mb-2"
              title={t('result.resistorB')}
              value={formatUnits(resistorBValue, Unit.Resistance)}
            />
            {manualCapacitor ? null : (
              <Statistic
                title={t('result.capacitor')}
                value={formatUnits(capacitorValue, Unit.Capacity, 2)}
              />
            )}
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="frequency">
        <Card>
          <CardContent className="space-y-2">
            <Label className="block mb-4 md:mb-5">
              {t('form.resistorA')}
              <Input
                className="mt-2"
                {...resistorAProps}
                rightSection={t('form.resistorAUnit')}
              />
            </Label>
            <Label className="block mb-4 md:mb-5">
              {t('form.resistorB')}
              <Input
                className="mt-2"
                {...resistorBProps}
                rightSection={t('form.resistorBUnit')}
              />
            </Label>
            <Label className="block">
              {t('form.capacitor')}
              <Input
                className="mt-2"
                {...capacitorProps}
                rightSection={t('form.capacitorUnit')}
              />
            </Label>
          </CardContent>
          <CardFooter className="flex flex-col items-start">
            <Statistic
              className="mb-2"
              title={t('result.frequency')}
              value={formatUnits(frequencyValue, Unit.Frequency)}
            />
            <Statistic
              title={t('result.dutyCycle')}
              value={`${formatUnits(dutyCycleValue)}\u202F%`}
            />
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
};
