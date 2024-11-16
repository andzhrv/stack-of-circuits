'use client';

import { useState } from 'react';

import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Statistic } from '@/components/ui/statistic';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useFormatTime } from '@/hooks/use-format-time';
import { useNumberInput } from '@/hooks/use-number-input';
import { useTrackResultChange } from '@/hooks/use-track-result-change';
import { useScopedI18n } from '@/locales/client';

export const BatteryLifeCalculator = () => {
  const t = useScopedI18n('BatteryLifeCalculator');
  const formatTime = useFormatTime();

  const [mode, setMode] = useState('basic');

  const [batteryCapacity, batteryCapacityProps] = useNumberInput({
    initialValue: '200',
    minValue: 0,
    maxValue: 10000000000
  });

  const [deviceLoadCurrent, deviceLoadCurrentProps] = useNumberInput({
    initialValue: '54',
    minValue: 0,
    maxValue: 10000000000
  });

  const [sleepModeTime, sleepModeTimeProps] = useNumberInput({
    initialValue: '900',
    minValue: 0,
    maxValue: 10000000000
  });

  const [sleepModeCurrent, sleepModeCurrentProps] = useNumberInput({
    initialValue: '0.1',
    minValue: 0,
    maxValue: 10000000000
  });

  const [awakeModeTime, awakeModeTimeProps] = useNumberInput({
    initialValue: '10',
    minValue: 0,
    maxValue: 10000000000
  });

  const [awakeModeCurrent, awakeModeCurrentProps] = useNumberInput({
    initialValue: '240',
    minValue: 0,
    maxValue: 10000000000
  });

  const batteryLifetime = (batteryCapacity / deviceLoadCurrent) * 3600;

  useTrackResultChange('battery-life-change', batteryLifetime);

  const batteryLifetimeAdvanced =
    (batteryCapacity /
      ((sleepModeCurrent * sleepModeTime) / (sleepModeTime + awakeModeTime) +
        (awakeModeCurrent * awakeModeTime) / (sleepModeTime + awakeModeTime))) *
    3600;

  return (
    <>
      <Tabs value={mode} onValueChange={setMode}>
        <TabsList className="grid w-full grid-cols-2 mb-2">
          <TabsTrigger value="basic">{t('mode.basic')}</TabsTrigger>
          <TabsTrigger value="advanced">{t('mode.advanced')}</TabsTrigger>
        </TabsList>
      </Tabs>
      <Card>
        <CardContent>
          <Label className="block mb-4 md:mb-5">
            {t('form.batteryCapacity')}
            <Input
              className="mt-2"
              {...batteryCapacityProps}
              rightSection={t('form.batteryCapacityUnit')}
            />
          </Label>
          {mode === 'basic' ? (
            <Label className="block mb-4 md:mb-5">
              {t('form.consumptionCurrent')}
              <Input
                className="mt-2"
                {...deviceLoadCurrentProps}
                rightSection={t('form.consumptionCurrentUnit')}
              />
            </Label>
          ) : null}
          {mode === 'advanced' ? (
            <>
              <Label className="block mb-4 md:mb-5">
                {t('form.sleepModeTime')}
                <Input
                  className="mt-2"
                  {...sleepModeTimeProps}
                  rightSection={t('form.sleepModeTimeUnit')}
                />
              </Label>
              <Label className="block mb-4 md:mb-5">
                {t('form.sleepModeCurrent')}
                <Input
                  className="mt-2"
                  {...sleepModeCurrentProps}
                  rightSection={t('form.sleepModeCurrentUnit')}
                />
              </Label>
              <Label className="block mb-4 md:mb-5">
                {t('form.awakeModeTime')}
                <Input
                  className="mt-2"
                  {...awakeModeTimeProps}
                  rightSection={t('form.awakeModeTimeUnit')}
                />
              </Label>
              <Label className="block mb-4 md:mb-5">
                {t('form.awakeModeCurrent')}
                <Input
                  className="mt-2"
                  {...awakeModeCurrentProps}
                  rightSection={t('form.awakeModeCurrentUnit')}
                />
              </Label>
            </>
          ) : null}
        </CardContent>
        <CardFooter className="flex flex-col items-start">
          <Statistic
            title={t('result.batteryLifetime')}
            value={formatTime(
              mode === 'basic' ? batteryLifetime : batteryLifetimeAdvanced
            )}
          />
        </CardFooter>
      </Card>
    </>
  );
};
