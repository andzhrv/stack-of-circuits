'use client';

import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Statistic } from '@/components/ui/statistic';
import { useInputState } from '@/hooks/use-input-state';
import { useTrackResultChange } from '@/hooks/use-track-result-change';
import { useScopedI18n } from '@/locales/client';
import { Unit, useFormatUnits } from '@/utils/format-units';

import { calculateCapacitorValue, tkeSet, toleranceSet } from './utils';

const capacitorCodeValidation = (code: string) =>
  new RegExp(`^[1-9](\\d(\\d)?${toleranceSet}?)?$`, 'i').test(code) ||
  new RegExp(
    `^[1-9](([RPNMUµ](\\d(${toleranceSet}${tkeSet}?)?)?|\\d([RPNMUµ](${toleranceSet}${tkeSet}?)?)?))?$`,
    'i'
  ).test(code) ||
  new RegExp(`^[NMUµ]([1-9](\\d(${toleranceSet}${tkeSet}?)?)?)?$`, 'i').test(
    code
  ) ||
  new RegExp(
    `^[GJACDEV]([1-9](\\d(\\d([1-9]${toleranceSet}?)?)?)?)?$`,
    'i'
  ).test(code);

export const CapacitorCodeCalculator = () => {
  const formatUnits = useFormatUnits();
  const t = useScopedI18n('CapacitorCodeCalculator');

  const [code, setCode] = useInputState({
    initialValue: '473K',
    validationFn: capacitorCodeValidation
  });

  const capacitorValue = calculateCapacitorValue(code.toUpperCase());

  useTrackResultChange('capacitor-code-change', capacitorValue.value);

  return (
    <Card>
      <CardContent>
        <Label className="block">
          {t('form.code')}
          <Input className="mt-2" value={code} onChange={setCode} />
          <div className="mt-1 text-xs text-muted-foreground">
            {t('form.note')}
          </div>
        </Label>
      </CardContent>
      <CardFooter className="flex flex-col items-start">
        <Statistic
          title={t('result.value')}
          value={formatUnits(capacitorValue.value, Unit.Capacity)}
        />
        {capacitorValue.tolerance ? (
          <Statistic
            title={t('result.tolerance')}
            value={capacitorValue.tolerance}
          />
        ) : null}
        {capacitorValue.tke ? (
          <Statistic title={t('result.tke')} value={capacitorValue.tke} />
        ) : null}
        {capacitorValue.voltage ? (
          <Statistic
            title={t('result.voltage')}
            value={formatUnits(capacitorValue.voltage, Unit.Voltage, 1)}
          />
        ) : null}
      </CardFooter>
    </Card>
  );
};
