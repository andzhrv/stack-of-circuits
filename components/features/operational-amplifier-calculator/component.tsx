'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Statistic } from '@/components/ui/statistic';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Unit, useFormatUnits } from '@/hooks/use-format-units';
import { useNumberInput } from '@/hooks/use-number-input';
import { useTrackResultChange } from '@/hooks/use-track-result-change';
import { cn } from '@/lib/utils';
import { useScopedI18n } from '@/locales/client';

import { calculateOperationalAmplifier } from './utils';

const imagesMap = {
  'non-inverting': 'operational-amplifier-circuit-1.jpg',
  inverting: 'operational-amplifier-circuit-2.jpg',
  differential: 'operational-amplifier-circuit-3.jpg'
};

export const OperationalAmplifierCalculator = () => {
  const { resolvedTheme } = useTheme();

  const formatUnits = useFormatUnits();
  const t = useScopedI18n('OperationalAmplifierCalculator');
  const [valueToCalculate, setValueToCalculate] = useState<
    'non-inverting' | 'inverting' | 'differential'
  >('non-inverting');

  const [inputResistorValue, inputResistorValueProps] = useNumberInput({
    initialValue: '15000',
    minValue: 0,
    maxValue: 10000000000
  });

  const [feedbackResistorValue, feedbackResistorValueProps] = useNumberInput({
    initialValue: '7500',
    minValue: 0,
    maxValue: 10000000000
  });

  const [inputAmplitudeValue, inputAmplitudeValueProps] = useNumberInput({
    initialValue: '5',
    minValue: 0,
    maxValue: 10000000000
  });

  const { outputAmplitude, gain } = calculateOperationalAmplifier({
    inputResistor: inputResistorValue,
    feedbackResistor: feedbackResistorValue,
    inputAmplitude: inputAmplitudeValue,
    valueToCalculate
  });

  useTrackResultChange('operational-amplifier-change', outputAmplitude);

  return (
    <>
      {/* @ts-expect-error fix typing of onValueChange */}
      <Tabs value={valueToCalculate} onValueChange={setValueToCalculate}>
        <TabsList className="grid w-full grid-cols-3 mb-2">
          <TabsTrigger
            className="text-[0.65rem] sm:tracking-tighter md:tracking-tight md:text-sm"
            value="non-inverting"
          >
            {t('mode.nonInverting')}
          </TabsTrigger>
          <TabsTrigger
            className="text-[0.65rem] tracking-tighter md:tracking-tight md:text-sm"
            value="inverting"
          >
            {t('mode.inverting')}
          </TabsTrigger>
          <TabsTrigger
            className="text-[0.65rem] tracking-tighter md:tracking-tight md:text-sm"
            value="differential"
          >
            {t('mode.differential')}
          </TabsTrigger>
        </TabsList>
      </Tabs>
      <Card>
        <CardHeader className="flex items-center relative h-36">
          <Image
            className={cn({ invert: resolvedTheme === 'dark' })}
            src={`/images/${imagesMap[valueToCalculate]}`}
            fill
            style={{ objectFit: 'contain' }}
            alt="Operational amplifier circuit"
          />
        </CardHeader>
        <CardContent>
          <Label className="block mb-4 md:mb-5">
            {t('form.inputResistor')} (R<sub>in</sub>)
            <Input
              className="mt-2"
              {...inputResistorValueProps}
              rightSection={t('form.inputResistorUnit')}
            />
          </Label>
          <Label className="block mb-4 md:mb-5">
            {t('form.feedbackResistor')} (R<sub>fb</sub>)
            <Input
              className="mt-2"
              {...feedbackResistorValueProps}
              rightSection={t('form.feedbackResistorUnit')}
            />
          </Label>
          <Label className="block">
            {t('form.inputAmplitude')} (V<sub>in</sub>)
            <Input
              className="mt-2"
              {...inputAmplitudeValueProps}
              rightSection={t('form.inputAmplitudeUnit')}
            />
          </Label>
        </CardContent>
        <CardFooter className="flex flex-col items-start">
          <Statistic title={t('result.gain')} value={formatUnits(gain)} />
          <Statistic
            title={t('result.outputAmplitude')}
            value={formatUnits(outputAmplitude, Unit.Voltage, 1)}
          />
        </CardFooter>
      </Card>
    </>
  );
};
