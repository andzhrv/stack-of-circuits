import { ChangeEvent, useEffect, useState } from 'react';

import { clearNumberValue } from '@/utils/clear-number-value';
import { parseNumberValue } from '@/utils/parse-number-value';
import { toSpliced } from '@/utils/to-spliced';

interface UseNumberInputsListOptions {
  initialValues?: string[];
  minValue?: number;
  maxValue?: number;
  isInteger?: boolean;
}

type UseNumberInputsListReturns = [
  number[],
  {
    value: string;
    onChange: (input: ChangeEvent<HTMLInputElement> | number) => void;
    inputMode: 'decimal' | 'numeric';
  }[],
  () => void,
  (index: number) => void
];

export const useNumberInputsList = (
  options?: UseNumberInputsListOptions
): UseNumberInputsListReturns => {
  const { initialValues, minValue, maxValue, isInteger } = options ?? {};
  const [valuesList, setValuesList] = useState<string[]>([]);
  const [parsedValuesList, setParsedValuesList] = useState<number[]>([]);

  const handleChange = (value: string, index: number) => {
    const clearedValue = clearNumberValue(value, minValue, isInteger);
    const parsedValue = parseNumberValue(clearedValue);

    if (
      !isNaN(parsedValue) &&
      ((minValue && parsedValue < minValue) ||
        (maxValue && parsedValue > maxValue))
    ) {
      return;
    }

    setParsedValuesList(toSpliced(parsedValuesList, index, 1, parsedValue));
    setValuesList(toSpliced(valuesList, index, 1, clearedValue));
  };

  useEffect(() => {
    if (initialValues) {
      setParsedValuesList(
        initialValues.map((value) =>
          parseNumberValue(clearNumberValue(value, minValue, isInteger))
        )
      );

      setValuesList(
        initialValues.map((value) =>
          clearNumberValue(value, minValue, isInteger)
        )
      );
    }
  }, []);

  const onChange =
    (index: number) => (input: ChangeEvent<HTMLInputElement> | number) => {
      if (typeof input === 'number') {
        handleChange(String(input), index);
      } else {
        handleChange(input.target.value, index);
      }
    };

  const handleAddInput = () => {
    setValuesList(valuesList.concat(''));
    setParsedValuesList(parsedValuesList.concat(NaN));
  };

  const handleRemoveInput = (index: number) => {
    setValuesList(toSpliced(valuesList, index, 1));
    setParsedValuesList(toSpliced(parsedValuesList, index, 1));
  };

  return [
    parsedValuesList,
    valuesList.map((value, index) => ({
      value,
      onChange: onChange(index),
      inputMode: isInteger ? 'numeric' : 'decimal'
    })),
    handleAddInput,
    handleRemoveInput
  ];
};
