'use client';

import { useState } from 'react';
import { TrashIcon } from '@radix-ui/react-icons';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Statistic } from '@/components/ui/statistic';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Unit, useFormatUnits } from '@/hooks/use-format-units';
import { useNumberInput } from '@/hooks/use-number-input';
import { useNumberInputsList } from '@/hooks/use-number-inputs-list';
import { useTrackResultChange } from '@/hooks/use-track-result-change';
import { cn } from '@/lib/utils';
import { useScopedI18n } from '@/locales/client';

import { calculatePowerDissipation } from './utils';

export const PowerDissipationCalculator = () => {
  const formatUnits = useFormatUnits();
  const t = useScopedI18n('PowerDissipationCalculator');
  const [mode, setMode] = useState<'parallel' | 'series'>('parallel');

  const [supplyVoltage, supplyVoltageProps] = useNumberInput({
    initialValue: '12',
    minValue: 0,
    maxValue: 10000000000
  });

  const [values, valuesProps, handleAddInput, handleRemoveInput] =
    useNumberInputsList({
      initialValues: ['440', '120'],
      minValue: 0,
      maxValue: 10000000000
    });

  const powerDissipation = calculatePowerDissipation(
    supplyVoltage,
    values,
    mode
  );

  useTrackResultChange('power-dissipation-change', powerDissipation[0]);

  return (
    <>
      {/* @ts-expect-error fix typing of onValueChange */}
      <Tabs value={mode} onValueChange={setMode}>
        <TabsList className="grid w-full grid-cols-2 mb-2">
          <TabsTrigger value="parallel">{t('mode.parallel')}</TabsTrigger>
          <TabsTrigger value="series">{t('mode.series')}</TabsTrigger>
        </TabsList>
      </Tabs>
      <Card>
        <CardContent>
          <Label className="block mb-4 md:mb-5">
            {t('form.supplyVoltage')}
            <Input
              className="mt-2"
              {...supplyVoltageProps}
              rightSection={t('form.supplyVoltageUnit')}
            />
          </Label>
          {valuesProps.map((props, index) => (
            <div key={index} className="flex items-end">
              <Label className="block basis-full mb-4 md:mb-5">
                {`${t('form.resistor')} ${index + 1}`}
                <Input
                  className="mt-2"
                  {...props}
                  rightSection={t('form.resistorUnit')}
                />
              </Label>
              <Button
                className="ml-2 mb-4 md:mb-5"
                aria-label={t('form.removeButton')}
                onClick={() => handleRemoveInput(index)}
                disabled={values.length < 2}
                variant="destructive"
                size="icon"
              >
                <TrashIcon className="h-[1.2rem] w-[1.2rem]" />
              </Button>
            </div>
          ))}
          <Button onClick={handleAddInput} disabled={values.length === 15}>
            {t('form.addButton')}
          </Button>
        </CardContent>
        <CardFooter className="flex flex-col items-start">
          {powerDissipation.map((value, index) => (
            <Statistic
              key={index}
              className={cn({ 'mb-2': index !== powerDissipation.length - 1 })}
              title={`${t('result.powerDissipation')} ${index + 1}`}
              value={formatUnits(value, Unit.Power, 1)}
            />
          ))}
        </CardFooter>
      </Card>
    </>
  );
};
