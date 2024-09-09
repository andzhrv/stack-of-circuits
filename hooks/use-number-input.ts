import { ChangeEvent, useEffect, useState } from 'react';

import { clearNumberValue } from '@/utils/clear-number-value';
import { parseNumberValue } from '@/utils/parse-number-value';

interface UseNumberInputOptions {
  initialValue?: string;
  minValue?: number;
  maxValue?: number;
  isInteger?: boolean;
}

type UseNumberInputReturns = [
  number,
  {
    value: string;
    onChange: (input: ChangeEvent<HTMLInputElement> | number) => void;
    inputMode: 'decimal' | 'numeric';
  }
];

export const useNumberInput = (
  options?: UseNumberInputOptions
): UseNumberInputReturns => {
  const { initialValue, minValue, maxValue, isInteger } = options ?? {};
  const [value, setValue] = useState<string>('');
  const [parsedValue, setParsedValue] = useState<number>(NaN);

  const handleChange = (value: string) => {
    const clearedValue = clearNumberValue(value, minValue, isInteger);
    const parsedValue = parseNumberValue(clearedValue);

    if (
      !isNaN(parsedValue) &&
      ((typeof minValue === 'number' && parsedValue < minValue) ||
        (typeof maxValue === 'number' && parsedValue > maxValue))
    ) {
      return;
    }

    setParsedValue(parsedValue);
    setValue(clearedValue);
  };

  useEffect(() => {
    if (initialValue) {
      handleChange(initialValue);
    }
  }, []);

  const onChange = (input: ChangeEvent<HTMLInputElement> | number) => {
    if (typeof input === 'number') {
      handleChange(String(input));
    } else {
      handleChange(input.target.value);
    }
  };

  return [
    parsedValue,
    { value, onChange, inputMode: isInteger ? 'numeric' : 'decimal' }
  ];
};
