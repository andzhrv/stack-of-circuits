'use client';

import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Statistic } from '@/components/ui/statistic';
import { useNumberInput } from '@/hooks/use-number-input';
import { useTrackResultChange } from '@/hooks/use-track-result-change';
import { useScopedI18n } from '@/locales/client';
import { Unit, useFormatUnits } from '@/utils/format-units';

import { calculateResistorValue } from './utils';

export const ZenerDiodeCalculator = () => {
  const formatUnits = useFormatUnits();
  const t = useScopedI18n('ZenerDiodeCalculator');

  const [supplyVoltage, supplyVoltageProps] = useNumberInput({
    initialValue: '5',
    minValue: 0,
    maxValue: 10000000000
  });

  const [stabilizationVoltage, stabilizationVoltageProps] = useNumberInput({
    initialValue: '2,1',
    minValue: 0,
    maxValue: 10000000000
  });

  const [minStabilizationCurrent, minStabilizationCurrentProps] =
    useNumberInput({
      initialValue: '5',
      minValue: 0,
      maxValue: 10000000000
    });

  const [outputCurrent, outputCurrentProps] = useNumberInput({
    initialValue: '20',
    minValue: 0,
    maxValue: 10000000000
  });

  const { resistorValue, powerValue, supplyVoltageError } =
    calculateResistorValue(
      supplyVoltage,
      stabilizationVoltage,
      minStabilizationCurrent,
      outputCurrent
    );

  useTrackResultChange('zener-diode-change', resistorValue);

  return (
    <Card>
      <CardContent>
        <Label className="block mb-4 md:mb-5">
          {t('form.supplyVoltage')} (V<sub>S</sub>)
          <Input
            className="mt-2"
            {...supplyVoltageProps}
            rightSection={t('form.supplyVoltageUnit')}
          />
          {supplyVoltageError ? (
            <div className="mt-1 text-sm text-red-400">
              {t('form.supplyVoltageErrorMsg')}
            </div>
          ) : null}
        </Label>
        <Label className="block mb-4 md:mb-5">
          {t('form.stabilizationVoltage')} (V<sub>Z</sub>)
          <Input
            className="mt-2"
            {...stabilizationVoltageProps}
            rightSection={t('form.stabilizationVoltageUnit')}
          />
        </Label>
        <Label className="block mb-4 md:mb-5">
          {t('form.minStabilizationCurrent')} (I<sub>ZK</sub>)
          <Input
            className="mt-2"
            {...minStabilizationCurrentProps}
            rightSection={t('form.minStabilizationCurrentUnit')}
          />
        </Label>
        <Label className="block">
          {t('form.outputCurrent')} (I<sub>L</sub>)
          <Input
            className="mt-2"
            {...outputCurrentProps}
            rightSection={t('form.outputCurrentUnit')}
          />
        </Label>
      </CardContent>
      <CardFooter className="flex flex-col items-start">
        <Statistic
          className="mb-2"
          title={t('result.resistorValue')}
          value={formatUnits(resistorValue, Unit.Resistance)}
        />
        <Statistic
          title={t('result.powerValue')}
          value={formatUnits(powerValue, Unit.Power, 1)}
        />
      </CardFooter>
    </Card>
  );
};
