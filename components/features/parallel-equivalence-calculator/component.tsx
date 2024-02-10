'use client';

import { useState } from 'react';

import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Statistic } from '@/components/ui/statistic';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useNumberInput } from '@/hooks/use-number-input';
import { useScopedI18n } from '@/locales/client';
import { Unit, useFormatUnits } from '@/utils/format-units';

import { calculateParallelEquivalence } from './utils';

const enum Component {
  Resistor = 'resistor',
  Capacitor = 'capacitor',
  Inductor = 'inductor'
}

const useComponentConfig = () => {
  const t = useScopedI18n('ParallelEquivalenceCalculator');

  return {
    [Component.Resistor]: {
      name: t('componentName.resistor'),
      unit: Unit.Resistance,
      unitNumber: 0,
      unitName: t('unitName.resistor'),
      resultTitle: t('resultTitle.resistor')
    },
    [Component.Capacitor]: {
      name: t('componentName.capacitor'),
      unit: Unit.Capacity,
      unitNumber: 2,
      unitName: t('unitName.capacitor'),
      resultTitle: t('resultTitle.capacitor')
    },
    [Component.Inductor]: {
      name: t('componentName.inductor'),
      unit: Unit.Inductance,
      unitNumber: 1,
      unitName: t('unitName.inductor'),
      resultTitle: t('resultTitle.inductor')
    }
  };
};

export const ParallelEquivalenceCalculator = () => {
  const formatUnits = useFormatUnits();
  const componentConfig = useComponentConfig();
  const [component, setComponent] = useState<Component>(Component.Resistor);

  const [value1, value1Props] = useNumberInput({
    initialValue: '5',
    minValue: 0,
    maxValue: 100000
  });

  const [value2, value2Props] = useNumberInput({
    initialValue: '10',
    minValue: 0,
    maxValue: 100000
  });

  const [value3, value3Props] = useNumberInput({
    initialValue: '',
    minValue: 0,
    maxValue: 100000
  });

  const [value4, value4Props] = useNumberInput({
    initialValue: '',
    minValue: 0,
    maxValue: 100000
  });

  const [value5, value5Props] = useNumberInput({
    initialValue: '',
    minValue: 0,
    maxValue: 100000
  });

  const resistance = calculateParallelEquivalence(
    [value1, value2, value3, value4, value5],
    component === 'capacitor' ? 'forward' : 'backwards'
  );

  return (
    <>
      {/* @ts-expect-error fix typing of onValueChange */}
      <Tabs value={component} onValueChange={setComponent}>
        <TabsList className="grid w-full grid-cols-3 mb-2">
          <TabsTrigger value="resistor">
            {componentConfig['resistor'].name}
          </TabsTrigger>
          <TabsTrigger value="capacitor">
            {componentConfig['capacitor'].name}
          </TabsTrigger>
          <TabsTrigger value="inductor">
            {componentConfig['inductor'].name}
          </TabsTrigger>
        </TabsList>
      </Tabs>
      <Card>
        <CardContent>
          <Label className="block mb-4 md:mb-5">
            {`${componentConfig[component].name} 1`}
            <Input
              className="mt-2"
              {...value1Props}
              rightSection={componentConfig[component].unitName}
            />
          </Label>
          <Label className="block mb-4 md:mb-5">
            {`${componentConfig[component].name} 2`}
            <Input
              className="mt-2"
              {...value2Props}
              rightSection={componentConfig[component].unitName}
            />
          </Label>
          <Label className="block mb-4 md:mb-5">
            {`${componentConfig[component].name} 3`}
            <Input
              className="mt-2"
              {...value3Props}
              rightSection={componentConfig[component].unitName}
            />
          </Label>
          <Label className="block mb-4 md:mb-5">
            {`${componentConfig[component].name} 4`}
            <Input
              className="mt-2"
              {...value4Props}
              rightSection={componentConfig[component].unitName}
            />
          </Label>
          <Label className="block mb-4 md:mb-5">
            {`${componentConfig[component].name} 5`}
            <Input
              className="mt-2"
              {...value5Props}
              rightSection={componentConfig[component].unitName}
            />
          </Label>
        </CardContent>
        <CardFooter className="flex flex-col items-start">
          <Statistic
            title={componentConfig[component].resultTitle}
            value={formatUnits(
              resistance,
              componentConfig[component].unit,
              componentConfig[component].unitNumber
            )}
          />
        </CardFooter>
      </Card>
    </>
  );
};
