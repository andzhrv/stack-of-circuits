export const calculateResistorValue = (
  supplyVoltage: number,
  stabilizationVoltage: number,
  minStabilizationCurrent: number,
  outputCurrent: number
) => {
  const supplyVoltageError = supplyVoltage <= stabilizationVoltage;

  if (
    isNaN(supplyVoltage) ||
    isNaN(stabilizationVoltage) ||
    isNaN(outputCurrent) ||
    supplyVoltageError
  ) {
    return {
      resistorValue: undefined,
      powerValue: undefined,
      supplyVoltageError
    };
  }

  const circuitCurrent = minStabilizationCurrent / 1000 + outputCurrent / 1000;

  const resistorValue = (supplyVoltage - stabilizationVoltage) / circuitCurrent;
  const powerValue = circuitCurrent ** 2 * resistorValue;

  return { resistorValue, powerValue, supplyVoltageError: false };
};
