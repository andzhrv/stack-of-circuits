import { ChangeEvent, useEffect, useState } from 'react';

type UseNumberInput = (options?: {
  initialValue?: string;
  minValue?: number;
  maxValue?: number;
  isInteger?: boolean;
}) => [
  number,
  {
    value: string;
    onChange: (input: ChangeEvent<HTMLInputElement> | number) => void;
    inputMode: 'decimal' | 'numeric';
  }
];

const numberRegExp = /\d*[.,]?\d*/;
const numberWithNegativeRegExp = /-?\d*[.,]?\d*/;

export const useNumberInput: UseNumberInput = (options) => {
  const { initialValue, minValue, maxValue, isInteger } = options ?? {};
  const [value, setValue] = useState<string>('');
  const [parsedValue, setParsedValue] = useState<number>(NaN);

  const handleChange = (value: string) => {
    const clearedValue =
      value
        .replace(/\s/g, '')
        .match(
          minValue && minValue < 0 ? numberWithNegativeRegExp : numberRegExp
        )
        ?.join('')
        .replace(/([,.])/, isInteger ? '' : '$1') ?? '';

    const parsedValue = isNaN(parseFloat(clearedValue))
      ? clearedValue
      : parseFloat(clearedValue.replace(',', '.'));

    if (
      typeof parsedValue === 'number' &&
      ((minValue && parsedValue < minValue) ||
        (maxValue && parsedValue > maxValue))
    ) {
      return;
    }

    setParsedValue(typeof parsedValue === 'number' ? parsedValue : NaN);
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
