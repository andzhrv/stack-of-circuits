export const calculateResonantTimeConstant = ({
  voltage,
  resistance,
  capacitance,
  timeConstant,
  valueToCalculate
}: {
  voltage: number | undefined;
  resistance: number;
  capacitance: number;
  timeConstant: number;
  valueToCalculate: string;
}) => {
  if (valueToCalculate === 'resistance') {
    const calculatedResistance = timeConstant / (capacitance / 1000);
    const maxCurrent = voltage ? voltage / calculatedResistance : undefined;
    const charge = voltage ? (capacitance / 1000) * voltage : undefined;

    return {
      resistance: calculatedResistance,
      capacitance,
      timeConstant,
      maxCurrent,
      charge
    };
  }

  if (valueToCalculate === 'capacitance') {
    const calculatedCapacitance = timeConstant / resistance;
    const maxCurrent = voltage ? voltage / resistance : undefined;
    const charge = voltage
      ? (calculatedCapacitance / 1000) * voltage
      : undefined;

    return {
      resistance,
      capacitance: calculatedCapacitance * 1000,
      timeConstant,
      maxCurrent,
      charge
    };
  }

  if (valueToCalculate === 'time-constant') {
    const calculatedTimeConstant = resistance * (capacitance / 1000);
    const maxCurrent = voltage ? voltage / resistance : undefined;
    const charge = voltage ? (capacitance / 1000) * voltage : undefined;

    return {
      resistance,
      capacitance,
      timeConstant: calculatedTimeConstant,
      maxCurrent,
      charge
    };
  }

  return {
    resistance: undefined,
    capacitance: undefined,
    timeConstant: undefined,
    maxCurrent: undefined,
    charge: undefined
  };
};
