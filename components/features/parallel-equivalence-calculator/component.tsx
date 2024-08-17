'use client';

import { useMemo, useState } from 'react';
import { TrashIcon } from '@radix-ui/react-icons';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Statistic } from '@/components/ui/statistic';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useNumberInputsList } from '@/hooks/use-number-inputs-list';
import { useTrackResultChange } from '@/hooks/use-track-result-change';
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

  return useMemo(
    () => ({
      [Component.Resistor]: {
        name: t('componentName.resistor'),
        addButtonText: t('addButton.resistor'),
        removeButtonText: t('removeButton.resistor'),
        unit: Unit.Resistance,
        unitNumber: 0,
        unitName: t('unitName.resistor'),
        resultTitle: t('resultTitle.resistor')
      },
      [Component.Capacitor]: {
        name: t('componentName.capacitor'),
        addButtonText: t('addButton.capacitor'),
        removeButtonText: t('removeButton.capacitor'),
        unit: Unit.Capacity,
        unitNumber: 2,
        unitName: t('unitName.capacitor'),
        resultTitle: t('resultTitle.capacitor')
      },
      [Component.Inductor]: {
        name: t('componentName.inductor'),
        addButtonText: t('addButton.inductor'),
        removeButtonText: t('removeButton.inductor'),
        unit: Unit.Inductance,
        unitNumber: 1,
        unitName: t('unitName.inductor'),
        resultTitle: t('resultTitle.inductor')
      }
    }),
    [t]
  );
};

export const ParallelEquivalenceCalculator = () => {
  const formatUnits = useFormatUnits();
  const componentConfig = useComponentConfig();
  const [component, setComponent] = useState<Component>(Component.Resistor);

  const [values, valuesProps, handleAddInput, handleRemoveInput] =
    useNumberInputsList({
      initialValues: ['5', '10'],
      minValue: 0,
      maxValue: 10000000000
    });

  const resistance = calculateParallelEquivalence(
    values,
    component === 'capacitor' ? 'forward' : 'backwards'
  );

  useTrackResultChange('parallel-equivalence-change', resistance);

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
          {valuesProps.map((props, index) => (
            <div key={index} className="flex items-end">
              <Label className="block basis-full mb-4 md:mb-5">
                {`${componentConfig[component].name} ${index + 1}`}
                <Input
                  className="mt-2"
                  {...props}
                  rightSection={componentConfig[component].unitName}
                />
              </Label>
              <Button
                className="ml-2 mb-4 md:mb-5"
                aria-label={componentConfig[component].removeButtonText}
                onClick={() => handleRemoveInput(index)}
                disabled={values.length < 3}
                variant="destructive"
                size="icon"
              >
                <TrashIcon />
              </Button>
            </div>
          ))}
          <Button onClick={handleAddInput} disabled={values.length === 15}>
            {componentConfig[component].addButtonText}
          </Button>
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
