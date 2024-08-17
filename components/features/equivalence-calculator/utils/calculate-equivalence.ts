export const calculateEquivalence = (
  values: number[],
  mode: 'forward' | 'backwards'
) => {
  if (mode === 'forward') {
    return values.reduce((acc, value) => acc + (value || 0), 0);
  }

  const valuesSum = values.reduce(
    (acc, value) => (isNaN(value) ? acc : acc + 1 / value),
    0
  );

  return 1 / (valuesSum || Infinity);
};
