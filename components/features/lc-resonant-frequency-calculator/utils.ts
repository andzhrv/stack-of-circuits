export const calculateResonantFrequency = ({
  inductance,
  capacitance,
  frequency,
  valueToCalculate
}: {
  inductance: number;
  capacitance: number;
  frequency: number;
  valueToCalculate: string;
}) => {
  if (valueToCalculate === 'inductance') {
    const calculatedInductance =
      1 / (4 * Math.PI ** 2 * (frequency / 1000) ** 2 * capacitance);

    return {
      inductance: calculatedInductance,
      capacitance,
      frequency
    };
  }

  if (valueToCalculate === 'capacitance') {
    const calculatedCapacitance =
      1 / (4 * Math.PI ** 2 * (frequency / 1000) ** 2 * inductance);

    return {
      inductance,
      capacitance: calculatedCapacitance,
      frequency
    };
  }

  if (valueToCalculate === 'frequency') {
    const calculatedFrequency =
      1 / (2 * Math.PI * Math.sqrt((inductance / 1000000) * capacitance));

    return {
      inductance,
      capacitance,
      frequency: calculatedFrequency
    };
  }

  return {
    inductance: undefined,
    capacitance: undefined,
    frequency: undefined
  };
};
