export const calculateResistorValue = (
  resistivity: number,
  wireSize: number,
  length: number,
  voltage: number,
  load: number
) => {
  if (isNaN(wireSize) || isNaN(length) || isNaN(voltage) || isNaN(load)) {
    return {
      voltageDrop: undefined,
      voltageDropPercentage: undefined,
      voltageAtEnd: undefined,
      powerLoss: undefined
    };
  }

  const voltageDropValue =
    (2 * resistivity * length * voltage ** 2 * (load / 1000)) /
    (resistivity * length * voltage * (load / 1000) + voltage ** 2 * wireSize);

  const voltageDrop = voltageDropValue < voltage ? voltageDropValue : voltage;
  const voltageDropPercentage = (voltageDrop / voltage) * 100;
  const voltageAtEnd = voltage - voltageDrop;
  const powerLoss = voltageDrop * (load / 1000);

  return {
    voltageDrop,
    voltageDropPercentage,
    voltageAtEnd,
    powerLoss
  };
};
