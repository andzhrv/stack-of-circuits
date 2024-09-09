export const calculateResistorValue = (
  frequency: number,
  dutyCycle: number,
  capacitor: number | undefined
) => {
  const isFrequencyError = frequency < 0.1;
  const isDutyCycleError = dutyCycle < 55 || dutyCycle > 95;

  if (
    isNaN(frequency) ||
    isNaN(dutyCycle) ||
    (typeof capacitor === 'number' && isNaN(capacitor)) ||
    isFrequencyError ||
    isDutyCycleError
  ) {
    return {
      resistorAValue: undefined,
      resistorBValue: undefined,
      capacitorValue: undefined,
      isFrequencyError,
      isDutyCycleError
    };
  }

  let capacitorValue =
    typeof capacitor === 'number' ? capacitor / 1000000 : 0.0000000001;

  if (typeof capacitor !== 'number') {
    if (frequency < 5) {
      capacitorValue = 0.0001;
    } else if (frequency < 30) {
      capacitorValue = 0.00001;
    } else if (frequency < 300) {
      capacitorValue = 0.000001;
    } else if (frequency < 3000) {
      capacitorValue = 0.0000001;
    } else if (frequency < 30000) {
      capacitorValue = 0.00000001;
    } else if (frequency < 300000) {
      capacitorValue = 0.000000001;
    }
  }

  const t = 1 / frequency;
  const tH = t * (dutyCycle / 100);
  const tL = t - tH;

  const resistorBValue = tL / (Math.log(2) * capacitorValue);
  const resistorAValue = tH / (Math.log(2) * capacitorValue) - resistorBValue;
  const capacitorCalculated =
    typeof capacitor === 'number'
      ? capacitor
      : (tL / (Math.log(2) * resistorBValue)) * 1000000;

  return {
    resistorAValue,
    resistorBValue,
    capacitorValue: capacitorCalculated,
    isFrequencyError: false,
    isDutyCycleError: false
  };
};

export const calculateFrequencyValue = (
  resistorA: number,
  resistorB: number,
  capacitor: number
) => {
  if (isNaN(resistorA) || isNaN(resistorB) || isNaN(capacitor)) {
    return {
      frequencyValue: undefined,
      dutyCycleValue: undefined
    };
  }

  const frequencyValue =
    1 / (Math.log(2) * (capacitor / 1000000) * (resistorA + 2 * resistorB));
  const dutyCycleValue =
    ((resistorA + resistorB) / (resistorA + 2 * resistorB)) * 100;

  return {
    frequencyValue,
    dutyCycleValue
  };
};
