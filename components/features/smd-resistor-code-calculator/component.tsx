'use client';

import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Statistic } from '@/components/ui/statistic';
import { Unit, useFormatUnits } from '@/hooks/use-format-units';
import { useInputState } from '@/hooks/use-input-state';
import { useTrackResultChange } from '@/hooks/use-track-result-change';
import { useScopedI18n } from '@/locales/client';

import { calculateSmdResistorValue } from './utils';

export const SmdResistorCodeCalculator = () => {
  const formatUnits = useFormatUnits();
  const t = useScopedI18n('SmdResistorCodeCalculator');

  const [code, setCode] = useInputState({
    initialValue: '03B',
    validation: /^([\dR]{0,3}\d?|\d{0,2}[ABCDEFHRSXYZ]?)$/
  });
  const resistorValue = calculateSmdResistorValue(code);

  useTrackResultChange('smd-resistor-code-change', resistorValue);

  return (
    <Card>
      <CardContent>
        <Label className="block">
          {t('form.code')}
          <Input className="mt-2" value={code} onChange={setCode} />
        </Label>
      </CardContent>
      <CardFooter>
        <Statistic
          title={t('result.value')}
          value={formatUnits(resistorValue, Unit.Resistance)}
        />
      </CardFooter>
    </Card>
  );
};
