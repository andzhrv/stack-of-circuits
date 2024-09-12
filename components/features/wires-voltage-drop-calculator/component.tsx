'use client';

import { useState } from 'react';

import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Statistic } from '@/components/ui/statistic';
import { useNumberInput } from '@/hooks/use-number-input';
import { useTrackResultChange } from '@/hooks/use-track-result-change';
import { useScopedI18n } from '@/locales/client';
import { Unit, useFormatUnits } from '@/utils/format-units';

import { ResistivityKey, resistivityKeys, resistivityMap } from './constants';
import { useMaterialNames } from './hooks';
import { calculateResistorValue } from './utils';

export const WiresVoltageDropCalculator = () => {
  const formatUnits = useFormatUnits();
  const materialNames = useMaterialNames();
  const t = useScopedI18n('WiresVoltageDropCalculator');

  const [materialValue, setMaterialValue] = useState<ResistivityKey>('copper');

  const [wireSize, wireSizeProps] = useNumberInput({
    initialValue: '5',
    minValue: 0,
    maxValue: 10000000000
  });

  const [distance, distanceProps] = useNumberInput({
    initialValue: '2,1',
    minValue: 0,
    maxValue: 10000000000
  });

  const [voltage, voltageProps] = useNumberInput({
    initialValue: '5',
    minValue: 0,
    maxValue: 10000000000
  });

  const [load, loadProps] = useNumberInput({
    initialValue: '200',
    minValue: 0,
    maxValue: 10000000000
  });

  const { voltageDrop, voltageDropPercentage, voltageAtEnd, powerLoss } =
    calculateResistorValue(
      resistivityMap[materialValue],
      wireSize,
      distance,
      voltage,
      load
    );

  useTrackResultChange('wires-voltage-drop-change', voltageDrop);

  return (
    <Card>
      <CardContent>
        <Label className="block" htmlFor="select-material">
          {t('form.selectMaterial')}
        </Label>
        {/* @ts-expect-error fix typing of onValueChange */}
        <Select value={materialValue} onValueChange={setMaterialValue}>
          <SelectTrigger id="select-material" className="mt-2 mb-4 md:mb-5">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {resistivityKeys.map((key) => (
              <SelectItem key={key} value={key}>
                <div className="flex items-center">{materialNames[key]}</div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Label className="block mb-4 md:mb-5">
          {t('form.wireSize')}
          <Input
            className="mt-2"
            {...wireSizeProps}
            rightSection={t('form.wireSizeUnit')}
          />
        </Label>
        <Label className="block mb-4 md:mb-5">
          {t('form.distance')}
          <Input
            className="mt-2"
            {...distanceProps}
            rightSection={t('form.distanceUnit')}
          />
        </Label>
        <Label className="block mb-4 md:mb-5">
          {t('form.voltage')}
          <Input
            className="mt-2"
            {...voltageProps}
            rightSection={t('form.voltageUnit')}
          />
        </Label>
        <Label className="block">
          {t('form.load')}
          <Input
            className="mt-2"
            {...loadProps}
            rightSection={t('form.loadUnit')}
          />
        </Label>
      </CardContent>
      <CardFooter className="flex flex-col items-start">
        <Statistic
          className="mb-2"
          title={t('result.voltageDrop')}
          value={`${formatUnits(voltageDrop, Unit.Voltage, 1)} (${formatUnits(voltageDropPercentage)}\u202F%)`}
        />
        <Statistic
          className="mb-2"
          title={t('result.voltageAtEnd')}
          value={formatUnits(voltageAtEnd, Unit.Voltage, 1)}
        />
        <Statistic
          title={t('result.powerLoss')}
          value={formatUnits(powerLoss, Unit.Power, 1)}
        />
      </CardFooter>
    </Card>
  );
};
