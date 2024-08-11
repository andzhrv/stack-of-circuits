'use client';

import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Statistic } from '@/components/ui/statistic';
import { useNumberInput } from '@/hooks/use-number-input';
import { useTrackResultChange } from '@/hooks/use-track-result-change';
import { useScopedI18n } from '@/locales/client';
import { Unit, useFormatUnits } from '@/utils/format-units';

export const VoltageDividerCalculator = () => {
  const formatUnits = useFormatUnits();
  const t = useScopedI18n('VoltageDividerCalculator');

  const [supplyVoltage, supplyVoltageProps] = useNumberInput({
    initialValue: '12',
    minValue: 0,
    maxValue: 10000000000
  });

  const [resistor1, resistor1Props] = useNumberInput({
    initialValue: '10',
    minValue: 0,
    maxValue: 10000000000
  });

  const [resistor2, resistor2Props] = useNumberInput({
    initialValue: '10',
    minValue: 0,
    maxValue: 10000000000
  });

  const outputVoltage = (resistor2 / (resistor1 + resistor2)) * supplyVoltage;

  useTrackResultChange('voltage-divider-change', outputVoltage);

  return (
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
        <Label className="block mb-4 md:mb-5">
          {t('form.resistor1')}
          <Input
            className="mt-2"
            {...resistor1Props}
            rightSection={t('form.resistorsUnit')}
          />
        </Label>
        <Label className="block mb-4 md:mb-5">
          {t('form.resistor2')}
          <Input
            className="mt-2"
            {...resistor2Props}
            rightSection={t('form.resistorsUnit')}
          />
        </Label>
      </CardContent>
      <CardFooter className="flex flex-col items-start">
        <Statistic
          title={t('result.outputVoltage')}
          value={formatUnits(outputVoltage, Unit.Voltage, 1)}
        />
      </CardFooter>
    </Card>
  );
};
