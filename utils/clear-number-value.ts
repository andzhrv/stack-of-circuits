const numberRegExp = /\d*[.,]?\d*/;
const numberWithNegativeRegExp = /-?\d*[.,]?\d*/;

export const clearNumberValue = (
  value: string,
  minValue: number | undefined,
  isInteger: boolean | undefined
): string =>
  value
    .replace(/\s/g, '')
    .match(minValue && minValue < 0 ? numberWithNegativeRegExp : numberRegExp)
    ?.join('')
    .replace(/([,.])/, isInteger ? '' : '$1') ?? '';
