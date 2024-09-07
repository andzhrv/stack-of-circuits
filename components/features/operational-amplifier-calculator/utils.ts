export const calculateOperationalAmplifier = ({
  inputResistor,
  feedbackResistor,
  inputAmplitude,
  valueToCalculate
}: {
  inputResistor: number;
  feedbackResistor: number;
  inputAmplitude: number;
  valueToCalculate: string;
}) => {
  if (valueToCalculate === 'inverting') {
    const outputAmplitude =
      -inputAmplitude * (feedbackResistor / inputResistor);
    const gain = outputAmplitude / inputAmplitude;

    return {
      outputAmplitude,
      gain
    };
  }

  if (valueToCalculate === 'non-inverting') {
    const outputAmplitude =
      inputAmplitude * (1 + feedbackResistor / inputResistor);
    const gain = outputAmplitude / inputAmplitude;

    return {
      outputAmplitude,
      gain
    };
  }

  if (valueToCalculate === 'differential') {
    const outputAmplitude = inputAmplitude * (feedbackResistor / inputResistor);
    const gain = outputAmplitude / inputAmplitude;

    return {
      outputAmplitude,
      gain
    };
  }

  return {
    outputAmplitude: undefined
  };
};
