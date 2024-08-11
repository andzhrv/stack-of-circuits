'use client';

import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Statistic } from '@/components/ui/statistic';
import { useNumberInput } from '@/hooks/use-number-input';
import { useTrackResultChange } from '@/hooks/use-track-result-change';
import { useScopedI18n } from '@/locales/client';
import { Unit, useFormatUnits } from '@/utils/format-units';

import {
  calculateResistorPowerDissipation,
  calculateResistorValue
} from './utils';

export const LedResistorCalculator = () => {
  const formatUnits = useFormatUnits();
  const t = useScopedI18n('LedResistorCalculator');

  const [supplyVoltage, supplyVoltageProps] = useNumberInput({
    initialValue: '5',
    minValue: 0,
    maxValue: 10000000000
  });

  const [forwardVoltage, forwardVoltageProps] = useNumberInput({
    initialValue: '2,1',
    minValue: 0,
    maxValue: 10000000000
  });

  const [forwardCurrent, forwardCurrentProps] = useNumberInput({
    initialValue: '20',
    minValue: 0,
    maxValue: 10000000000
  });

  const [numberOfLED, numberOfLEDProps] = useNumberInput({
    initialValue: '1',
    minValue: 1,
    maxValue: 1000000,
    isInteger: true
  });

  const { resistorValue, ledVoltageDrop } = calculateResistorValue(
    supplyVoltage,
    forwardVoltage,
    forwardCurrent,
    numberOfLED
  );

  useTrackResultChange('led-resistor-change', resistorValue);

  const resistorPowerDissipation = calculateResistorPowerDissipation(
    forwardCurrent,
    numberOfLED,
    resistorValue
  );

  return (
    <Card>
      <CardContent>
        <Label className="block mb-4 md:mb-5">
          {t('form.supplyVoltage')} (V<sub>s</sub>)
          <Input
            className="mt-2"
            {...supplyVoltageProps}
            rightSection={t('form.supplyVoltageUnit')}
          />
        </Label>
        <Label className="block mb-4 md:mb-5">
          {t('form.forwardVoltage')} (V<sub>led</sub>)
          <Input
            className="mt-2"
            {...forwardVoltageProps}
            rightSection={t('form.forwardVoltageUnit')}
          />
        </Label>
        <Label className="block mb-4 md:mb-5">
          {t('form.forwardCurrent')} (I<sub>led</sub>)
          <Input
            className="mt-2"
            {...forwardCurrentProps}
            rightSection={t('form.forwardCurrentUnit')}
          />
        </Label>
        <Label className="block">
          {t('form.numberOfLED')} (N)
          <Input className="mt-2" {...numberOfLEDProps} />
        </Label>
      </CardContent>
      <CardFooter className="flex flex-col items-start">
        {supplyVoltage && ledVoltageDrop && supplyVoltage < ledVoltageDrop ? (
          <span className="text-sm text-red-400">{t('form.errorMsg')}</span>
        ) : (
          <>
            <Statistic
              className="mb-2"
              title={t('result.value')}
              value={formatUnits(resistorValue, Unit.Resistance)}
            />
            <Statistic
              title={t('result.resistorPowerDissipation')}
              value={formatUnits(resistorPowerDissipation, Unit.Power, 1)}
            />
          </>
        )}
      </CardFooter>
    </Card>
  );
};
