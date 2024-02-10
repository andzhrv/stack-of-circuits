export const calculateOhmsLaw = ({
  voltage,
  current,
  resistance,
  valueToCalculate
}: {
  voltage: number;
  current: number;
  resistance: number;
  valueToCalculate: string;
}) => {
  if (valueToCalculate === 'voltage') {
    const calculatedVoltage = current * resistance;

    return {
      voltage: calculatedVoltage,
      current: current,
      resistance: resistance,
      power: calculatedVoltage * current
    };
  }

  if (valueToCalculate === 'current') {
    const calculatedCurrent = voltage / resistance;

    return {
      voltage: voltage,
      current: calculatedCurrent,
      resistance: resistance,
      power: voltage * calculatedCurrent
    };
  }

  if (valueToCalculate === 'resistance') {
    return {
      voltage: voltage,
      current: current,
      resistance: voltage / current,
      power: voltage * current
    };
  }

  return {
    voltage: undefined,
    current: undefined,
    resistance: undefined,
    power: undefined
  };
};
