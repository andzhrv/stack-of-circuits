'use client';

import { useEffect, useState } from 'react';

import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Statistic } from '@/components/ui/statistic';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Unit, useFormatUnits } from '@/hooks/use-format-units';
import { useNumberInput } from '@/hooks/use-number-input';
import { useTrackResultChange } from '@/hooks/use-track-result-change';
import { useScopedI18n } from '@/locales/client';

import { calculateVoltageRegulator } from './utils';

export const VoltageRegulatorCalculator = () => {
  const formatUnits = useFormatUnits();
  const t = useScopedI18n('VoltageRegulatorCalculator');
  const [valueToCalculate, setValueToCalculate] = useState('voltage');

  const [voltageValue, voltageValueProps] = useNumberInput({
    initialValue: '5',
    minValue: 0,
    maxValue: 10000000000
  });

  const [resistor1Value, resistor1ValueProps] = useNumberInput({
    initialValue: '240',
    minValue: 0,
    maxValue: 10000000000
  });

  const [resistor2Value, resistor2ValueProps] = useNumberInput({
    initialValue: '2200',
    minValue: 0,
    maxValue: 10000000000
  });

  const { voltage, resistor1, resistor2 } = calculateVoltageRegulator({
    voltage: voltageValue,
    resistor1: resistor1Value,
    resistor2: resistor2Value,
    valueToCalculate
  });

  useTrackResultChange('voltage-regulator-change', voltage);

  useEffect(() => {
    if (valueToCalculate === 'voltage') {
      voltageValueProps.onChange(voltage ?? 0);
    } else if (valueToCalculate === 'resistor1') {
      resistor1ValueProps.onChange(resistor1 ?? 0);
    } else if (valueToCalculate === 'resistor2') {
      resistor2ValueProps.onChange(resistor2 ?? 0);
    }
  }, [voltage, resistor1, resistor2, valueToCalculate]);

  return (
    <>
      <Tabs value={valueToCalculate} onValueChange={setValueToCalculate}>
        <TabsList className="grid w-full grid-cols-3 mb-2">
          <TabsTrigger value="voltage">{t('mode.voltage')}</TabsTrigger>
          <TabsTrigger value="resistor1">{`${t('mode.resistor')} 1`}</TabsTrigger>
          <TabsTrigger value="resistor2">{`${t('mode.resistor')} 2`}</TabsTrigger>
        </TabsList>
      </Tabs>
      <Card>
        <CardContent>
          {valueToCalculate !== 'resistor1' ? (
            <Label className="block mb-4 md:mb-5">
              {`${t('form.resistor')} 1`}
              <Input
                className="mt-2"
                {...resistor1ValueProps}
                rightSection={t('form.resistanceUnit')}
              />
            </Label>
          ) : null}
          {valueToCalculate !== 'resistor2' ? (
            <Label className="block mb-4 md:mb-5">
              {`${t('form.resistor')} 2`}
              <Input
                className="mt-2"
                {...resistor2ValueProps}
                rightSection={t('form.resistanceUnit')}
              />
            </Label>
          ) : null}
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
        </CardContent>
        <CardFooter className="flex flex-col items-start">
          {valueToCalculate === 'voltage' ? (
            <Statistic
              title={t('result.voltage')}
              value={formatUnits(voltage, Unit.Voltage, 1)}
            />
          ) : null}
          {valueToCalculate === 'resistor1' ? (
            <Statistic
              title={`${t('result.resistor')} 1`}
              value={formatUnits(resistor1, Unit.Resistance)}
            />
          ) : null}
          {valueToCalculate === 'resistor2' ? (
            <Statistic
              title={`${t('result.resistor')} 2`}
              value={formatUnits(resistor2, Unit.Resistance)}
            />
          ) : null}
        </CardFooter>
      </Card>
    </>
  );
};
