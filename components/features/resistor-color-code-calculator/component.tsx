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
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BandKey, useBandColors } from '@/constants/color-code';
import { useTrackResultChange } from '@/hooks/use-track-result-change';
import { useScopedI18n } from '@/locales/client';
import { Unit, useFormatUnits } from '@/utils/format-units';

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
const thirdDigit: BandKey[] = [
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
  ['yellow', '10000'],
  ['green', '100000'],
  ['blue', '1000000'],
  ['violet', '10000000'],
  ['gray', '100000000'],
  ['white', '1000000000'],
  ['gold', '0.1'],
  ['silver', '0.01']
];
const tolerance: [BandKey, string][] = [
  ['brown', '1%'],
  ['red', '2%'],
  ['orange', '3%'],
  ['yellow', '4%'],
  ['green', '0.5%'],
  ['blue', '0.25%'],
  ['violet', '0.10%'],
  ['gray', '0.05%'],
  ['gold', '5%'],
  ['silver', '10%']
];
const tempco: [BandKey, string][] = [
  ['brown', '100'],
  ['red', '50'],
  ['orange', '15'],
  ['yellow', '25'],
  ['blue', '10'],
  ['violet', '5']
];

export const ResistorColorCodeCalculator = () => {
  const formatUnits = useFormatUnits();
  const bandColors = useBandColors();
  const t = useScopedI18n('ResistorColorCodeCalculator');
  const [bandsNumber, setBandsNumber] = useState('4-band');

  const [firstDigitValue, setFirstDigitValue] = useState('2');
  const [secondDigitValue, setSecondDigitValue] = useState('7');
  const [thirdDigitValue, setThirdDigitValue] = useState('3');
  const [multiplierValue, setMultiplierValue] = useState('1');
  const [toleranceValue, setToleranceValue] = useState('5%');
  const [tempcoValue, setTempcoValue] = useState('10');

  const resistorValue =
    parseInt(
      `${firstDigitValue}${secondDigitValue}${bandsNumber !== '4-band' ? thirdDigitValue : ''}`,
      10
    ) * parseFloat(multiplierValue);

  useTrackResultChange('resistor-color-code-change', resistorValue);

  return (
    <>
      <Tabs value={bandsNumber} onValueChange={setBandsNumber}>
        <TabsList className="grid w-full grid-cols-3 mb-2">
          <TabsTrigger value="4-band">{t('mode.Band4')}</TabsTrigger>
          <TabsTrigger value="5-band">{t('mode.Band5')}</TabsTrigger>
          <TabsTrigger value="6-band">{t('mode.Band6')}</TabsTrigger>
        </TabsList>
      </Tabs>
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

          {bandsNumber !== '4-band' ? (
            <>
              <Label className="block" htmlFor="third-digit">
                {t('form.thirdDigit')}
              </Label>
              <Select
                value={thirdDigitValue}
                onValueChange={setThirdDigitValue}
              >
                <SelectTrigger id="third-digit" className="mt-2 mb-4 md:mb-5">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {thirdDigit.map((key) => (
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
            </>
          ) : null}
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

          {bandsNumber === '6-band' ? (
            <>
              <Label className="block" htmlFor="tempco">
                {t('form.tempco')}
              </Label>
              <Select value={tempcoValue} onValueChange={setTempcoValue}>
                <SelectTrigger id="tempco" className="mt-2 mb-4 md:mb-5">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {tempco.map(([key, value]) => (
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
            </>
          ) : null}
        </CardContent>
        <CardFooter className="flex flex-col items-start">
          <Statistic
            className="mb-2"
            title={t('result.value')}
            value={formatUnits(resistorValue, Unit.Resistance)}
          />
          <Statistic
            title={t('result.tolerance')}
            value={toleranceValue ?? '\u2014'}
          />
          {bandsNumber === '6-band' ? (
            <Statistic
              className="mt-2"
              title={t('result.tempco')}
              value={tempcoValue ? `${tempcoValue} ppm/\u00B0C` : '\u2014'}
            />
          ) : null}
        </CardFooter>
      </Card>
    </>
  );
};
