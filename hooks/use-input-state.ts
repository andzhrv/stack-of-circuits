import { ChangeEventHandler, useState } from 'react';

type UseInputState = (options?: {
  initialValue?: string;
  validation?: RegExp;
}) => [string, ChangeEventHandler<HTMLInputElement>];

export const useInputState: UseInputState = (options) => {
  const [value, setValue] = useState(options?.initialValue ?? '');

  const onChangeValue: ChangeEventHandler<HTMLInputElement> = (event) => {
    const newValue = event.target.value;

    if (
      newValue !== '' &&
      options?.validation &&
      !options.validation.test(newValue)
    ) {
      return;
    }

    setValue(newValue);
  };

  return [value, onChangeValue];
};
