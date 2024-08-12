export const calculateVoltageRegulator = ({
  voltage,
  resistor1,
  resistor2,
  valueToCalculate
}: {
  voltage: number;
  resistor1: number;
  resistor2: number;
  valueToCalculate: string;
}) => {
  if (valueToCalculate === 'voltage') {
    const calculatedVoltage = 1.25 * (1 + resistor2 / resistor1);

    return {
      voltage: calculatedVoltage,
      resistor1,
      resistor2
    };
  }

  if (valueToCalculate === 'resistor1') {
    const calculatedResistor1 = roundValue(resistor2 / (voltage / 1.25 - 1));

    return {
      voltage,
      resistor1: calculatedResistor1,
      resistor2
    };
  }

  if (valueToCalculate === 'resistor2') {
    const calculatedResistor2 = roundValue(resistor1 * (voltage / 1.25 - 1));

    return {
      voltage,
      resistor1,
      resistor2: calculatedResistor2
    };
  }

  return {
    voltage: undefined,
    resistor1: undefined,
    resistor2: undefined
  };
};

const roundValue = (value: number) => Math.round(value * 1000) / 1000;
