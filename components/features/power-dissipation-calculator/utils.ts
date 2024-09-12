export const calculatePowerDissipation = (
  voltage: number,
  values: number[],
  mode: 'parallel' | 'series'
) => {
  if (mode === 'series') {
    const totalResistance = values.reduce(
      (acc, value) => acc + (value || 0),
      0
    );

    const current = voltage / totalResistance;

    return values.map((value) => current ** 2 * value);
  }

  return values.map((value) => voltage ** 2 / value);
};
