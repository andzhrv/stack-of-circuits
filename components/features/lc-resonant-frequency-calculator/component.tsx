'use client';

import { useEffect, useState } from 'react';

import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Statistic } from '@/components/ui/statistic';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useNumberInput } from '@/hooks/use-number-input';
import { useTrackResultChange } from '@/hooks/use-track-result-change';
import { useScopedI18n } from '@/locales/client';
import { Unit, useFormatUnits } from '@/utils/format-units';

import { calculateResonantFrequency } from './utils';

export const LCResonantFrequencyCalculator = () => {
  const formatUnits = useFormatUnits();
  const t = useScopedI18n('LCResonantFrequencyCalculator');
  const [valueToCalculate, setValueToCalculate] = useState('frequency');

  const [inductanceValue, inductanceValueProps] = useNumberInput({
    initialValue: '5',
    minValue: 0,
    maxValue: 10000000000
  });

  const [capacitanceValue, capacitanceValueProps] = useNumberInput({
    initialValue: '240',
    minValue: 0,
    maxValue: 10000000000
  });

  const [frequencyValue, frequencyValueProps] = useNumberInput({
    initialValue: '4.594',
    minValue: 0,
    maxValue: 10000000000
  });

  const { inductance, capacitance, frequency } = calculateResonantFrequency({
    inductance: inductanceValue,
    capacitance: capacitanceValue,
    frequency: frequencyValue,
    valueToCalculate
  });

  useTrackResultChange('resonant-frequency-change', frequency);

  useEffect(() => {
    if (valueToCalculate === 'inductance') {
      inductanceValueProps.onChange(inductance ?? 0);
    } else if (valueToCalculate === 'capacitance') {
      capacitanceValueProps.onChange(capacitance ?? 0);
    } else if (valueToCalculate === 'frequency') {
      frequencyValueProps.onChange(frequency ?? 0);
    }
  }, [inductance, capacitance, frequency, valueToCalculate]);

  return (
    <>
      <Tabs value={valueToCalculate} onValueChange={setValueToCalculate}>
        <TabsList className="grid w-full grid-cols-3 mb-2">
          <TabsTrigger value="frequency">{t('mode.frequency')}</TabsTrigger>
          <TabsTrigger value="capacitance">{t('mode.capacitance')}</TabsTrigger>
          <TabsTrigger value="inductance">{t('mode.inductance')}</TabsTrigger>
        </TabsList>
      </Tabs>
      <Card>
        <CardContent>
          {valueToCalculate !== 'inductance' ? (
            <Label className="block mb-4 md:mb-5">
              {t('form.inductance')}
              <Input
                className="mt-2"
                {...inductanceValueProps}
                rightSection={t('form.inductanceUnit')}
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
          {valueToCalculate !== 'frequency' ? (
            <Label className="block mb-4 md:mb-5">
              {t('form.frequency')}
              <Input
                className="mt-2"
                {...frequencyValueProps}
                rightSection={t('form.frequencyUnit')}
              />
            </Label>
          ) : null}
        </CardContent>
        <CardFooter className="flex flex-col items-start">
          {valueToCalculate === 'inductance' ? (
            <Statistic
              title={t('result.inductance')}
              value={formatUnits(inductance, Unit.Inductance, 3)}
            />
          ) : null}
          {valueToCalculate === 'capacitance' ? (
            <Statistic
              title={t('result.capacitance')}
              value={formatUnits(capacitance, Unit.Capacity, 2)}
            />
          ) : null}
          {valueToCalculate === 'frequency' ? (
            <Statistic
              title={t('result.frequency')}
              value={formatUnits(frequency, Unit.Frequency)}
            />
          ) : null}
        </CardFooter>
      </Card>
    </>
  );
};
