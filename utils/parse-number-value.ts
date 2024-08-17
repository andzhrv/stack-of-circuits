export const parseNumberValue = (value: string): number =>
  parseFloat(value.replace(',', '.'));
