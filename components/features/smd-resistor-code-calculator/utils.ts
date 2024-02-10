const eia96Multiplier = {
  Z: 0.001,
  Y: 0.01,
  R: 0.01,
  X: 0.1,
  S: 0.1,
  A: 1,
  B: 10,
  H: 10,
  C: 100,
  D: 1e3,
  E: 1e4,
  F: 1e5
};

const getEia96Value = (n: number) => Math.round(Math.pow(10, n / 96) * 100);

export const calculateSmdResistorValue = (code: string): number | undefined => {
  if (code === '0') {
    return 0;
  }

  if (code.length < 3) {
    return;
  }

  if (/^\d{2}[ABCDEFHRSXYZ]$/.test(code)) {
    const value = getEia96Value(parseInt(code.slice(0, -1), 10) - 1);
    const multiplierCode = code.slice(-1) as keyof typeof eia96Multiplier;
    const multiplier = eia96Multiplier[multiplierCode];

    return Math.round(value * multiplier * 1000) / 1000;
  }

  if (code.indexOf('R') !== -1) {
    return parseFloat(code.replace('R', '.'));
  }

  const value = parseInt(code.slice(0, -1), 10);
  const multiplier = parseInt(code.slice(-1), 10);

  return value * 10 ** multiplier;
};
