export const calculateResistorValue = (
  supplyVoltage: number,
  forwardVoltage: number,
  forwardCurrent: number,
  numberOfLED: number
) => {
  if (
    isNaN(supplyVoltage) ||
    isNaN(forwardVoltage) ||
    isNaN(forwardCurrent) ||
    isNaN(numberOfLED)
  ) {
    return { ledVoltageDrop: undefined, resistorValue: undefined };
  }

  const ledVoltageDrop = forwardVoltage * numberOfLED;
  const resistorValue = Math.round(
    (supplyVoltage - ledVoltageDrop) / (forwardCurrent / 1000)
  );

  return { ledVoltageDrop, resistorValue };
};

export const calculateResistorPowerDissipation = (
  forwardCurrent: number,
  numberOfLED: number,
  resistorValue: number | undefined
): number | undefined => {
  if (
    isNaN(forwardCurrent) ||
    isNaN(numberOfLED) ||
    !resistorValue ||
    isNaN(resistorValue)
  ) {
    return;
  }

  return (
    Math.round(
      ((forwardCurrent / 1000) * numberOfLED) ** 2 * resistorValue * 1000
    ) / 1000
  );
};
