'use client';

import { useState } from 'react';

import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Statistic } from '@/components/ui/statistic';
import { BandKey, useBandColors } from '@/constants/color-code';
import { Unit, useFormatUnits } from '@/hooks/use-format-units';
import { useTrackResultChange } from '@/hooks/use-track-result-change';
import { useScopedI18n } from '@/locales/client';

const firstDigit: BandKey[] = [
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'gray',
  'white'
];
const secondDigit: BandKey[] = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'gray',
  'white'
];
const multiplier: [BandKey, string][] = [
  ['black', '1'],
  ['brown', '10'],
  ['red', '100'],
  ['orange', '1000'],
  ['gold', '0.1'],
  ['silver', '0.01']
];
const tolerance: [BandKey, string][] = [
  ['black', '20%'],
  ['gold', '5%'],
  ['silver', '10%']
];

export const InductorColorCodeCalculator = () => {
  const formatUnits = useFormatUnits();
  const bandColors = useBandColors();
  const t = useScopedI18n('InductorColorCodeCalculator');

  const [firstDigitValue, setFirstDigitValue] = useState('2');
  const [secondDigitValue, setSecondDigitValue] = useState('7');
  const [multiplierValue, setMultiplierValue] = useState('1');
  const [toleranceValue, setToleranceValue] = useState('5%');

  const inductorValue =
    parseInt(`${firstDigitValue}${secondDigitValue}`, 10) *
    parseFloat(multiplierValue);

  useTrackResultChange('inductor-color-code-change', inductorValue);

  return (
    <Card>
      <CardContent>
        <Label className="block" htmlFor="first-digit">
          {t('form.firstDigit')}
        </Label>
        <Select value={firstDigitValue} onValueChange={setFirstDigitValue}>
          <SelectTrigger id="first-digit" className="mt-2 mb-4 md:mb-5">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {firstDigit.map((key) => (
              <SelectItem key={key} value={bandColors[key].value}>
                <div className="flex items-center">
                  <div
                    className="w-[14px] h-[14px] rounded-sm mr-1"
                    style={{ backgroundColor: bandColors[key].color }}
                  />
                  {bandColors[key].title}
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Label className="block" htmlFor="second-digit">
          {t('form.secondDigit')}
        </Label>
        <Select value={secondDigitValue} onValueChange={setSecondDigitValue}>
          <SelectTrigger id="second-digit" className="mt-2 mb-4 md:mb-5">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {secondDigit.map((key) => (
              <SelectItem key={key} value={bandColors[key].value}>
                <div className="flex items-center">
                  <div
                    className="w-[14px] h-[14px] rounded-sm mr-1"
                    style={{ backgroundColor: bandColors[key].color }}
                  />
                  {bandColors[key].title}
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Label className="block" htmlFor="multiplier">
          {t('form.multiplier')}
        </Label>
        <Select value={multiplierValue} onValueChange={setMultiplierValue}>
          <SelectTrigger id="multiplier" className="mt-2 mb-4 md:mb-5">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {multiplier.map(([key, value]) => (
              <SelectItem key={key} value={value}>
                <div className="flex items-center">
                  <div
                    className="w-[14px] h-[14px] rounded-sm mr-1"
                    style={{ backgroundColor: bandColors[key].color }}
                  />
                  {bandColors[key].title}
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Label className="block" htmlFor="tolerance">
          {t('form.tolerance')}
        </Label>
        <Select value={toleranceValue} onValueChange={setToleranceValue}>
          <SelectTrigger id="tolerance" className="mt-2 mb-4 md:mb-5">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {tolerance.map(([key, value]) => (
              <SelectItem key={key} value={value}>
                <div className="flex items-center">
                  <div
                    className="w-[14px] h-[14px] rounded-sm mr-1"
                    style={{ backgroundColor: bandColors[key].color }}
                  />
                  {bandColors[key].title}
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </CardContent>
      <CardFooter className="flex flex-col items-start">
        <Statistic
          className="mb-2"
          title={t('result.value')}
          value={formatUnits(inductorValue, Unit.Inductance, 1)}
        />
        <Statistic title={t('result.tolerance')} value={toleranceValue} />
      </CardFooter>
    </Card>
  );
};
