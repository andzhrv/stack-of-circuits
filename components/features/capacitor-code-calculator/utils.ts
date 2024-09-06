export const toleranceSet = '[BCDFGJKMNQTYSZЖУДРЛИСВФОЭЮБА]';
export const tkeSet = '[ANCHMLPRSTUVKBZDXEF]';

const regExp1 = new RegExp(
  `^(([NMµ])[1-9]\\d|[1-9]([RPNMµ])\\d|[1-9]\\d([RPNMµ]))(${toleranceSet})?(${tkeSet})?$`,
  'i'
);
const regExp2 = new RegExp(`^([1-9]\\d)(\\d)?(${toleranceSet})?$`, 'i');
const regExp3 = new RegExp(
  `^([GJACDEV])([1-9]\\d\\d)([1-9])(${toleranceSet})?$`,
  'i'
);

const multiplierMap: Record<string, number> = {
  R: 0,
  P: 0,
  N: 3,
  M: 6,
  µ: 6
};

const toleranceMap: Record<string, string> = {
  B: '\u00B10.1%',
  C: '\u00B10.25%',
  D: '\u00B10.5%',
  F: '\u00B11%',
  G: '\u00B12%',
  J: '\u00B15%',
  K: '\u00B110%',
  M: '\u00B120%',
  N: '\u00B130%',
  Q: '-10%\u2026+30%',
  T: '-10%\u2026+50%',
  Y: '-10%\u2026+100%',
  S: '-20%\u2026+50%',
  Z: '-20%\u2026+80%',
  Ж: '\u00B10.1%',
  У: '\u00B10.25%',
  Д: '\u00B10.5%',
  Р: '\u00B11%',
  Л: '\u00B12%',
  И: '\u00B15%',
  С: '\u00B110%',
  В: '\u00B120%',
  Ф: '\u00B130%',
  О: '-10%\u2026+30%',
  Э: '-10%\u2026+50%',
  Ю: '-10%\u2026+100%',
  Б: '-20%\u2026+50%',
  А: '-20%\u2026+80%'
};

const tkeMap: Record<string, string> = {
  A: '100\u202Fppm/\u2103',
  N: '33\u202Fppm/\u2103',
  C: '0\u202Fppm/\u2103',
  H: '-33\u202Fppm/\u2103',
  M: '-47\u202Fppm/\u2103',
  L: '-75\u202Fppm/\u2103',
  P: '-150\u202Fppm/\u2103',
  R: '-220\u202Fppm/\u2103',
  S: '-330\u202Fppm/\u2103',
  T: '-470\u202Fppm/\u2103',
  U: '-750\u202Fppm/\u2103',
  V: '-1500\u202Fppm/\u2103',
  K: '-2200\u202Fppm/\u2103',
  B: '\u00B110%',
  Z: '\u00B120%',
  D: '\u00B130%',
  X: '\u00B150%',
  E: '\u00B170%',
  F: '\u00B190%'
};

const voltageMap: Record<string, number> = {
  G: 4,
  J: 6.3, // 6.3/7
  A: 10,
  C: 16,
  D: 20,
  E: 25,
  V: 35
};

const parseCode = (
  code: string
): {
  value: number | undefined;
  multiplier: number | undefined;
  tolerance: string | undefined;
  tke: string | undefined;
  voltage: string | undefined;
} => {
  let value: number | undefined;
  let multiplier: number | undefined;
  let tolerance: string | undefined;
  let tke: string | undefined;
  let voltage: string | undefined;

  if (regExp1.test(code)) {
    const result = code.match(regExp1);

    if (result) {
      value = parseFloat(result[1].replace(/[RPNMµ]/, '.'));
      multiplier = multiplierMap[result[2] || result[3] || result[4]] || 0;
      tolerance = result[5];
      tke = result[6];
    }
  } else if (regExp2.test(code)) {
    const result = code.match(regExp2);

    if (result) {
      value = parseInt(result[1], 10);
      multiplier = parseInt(result[2] || '0', 10);
      multiplier = multiplier > 7 ? multiplier - 10 : multiplier;
      tolerance = result[3];
    }
  } else if (regExp3.test(code)) {
    const result = code.match(regExp3);

    if (result) {
      voltage = result[1];
      value = parseInt(result[2], 10);
      multiplier = parseInt(result[3] || '0', 10);
      multiplier = multiplier > 7 ? multiplier - 10 : multiplier;
      tolerance = result[4];
    }
  }

  return {
    value,
    multiplier,
    tolerance,
    tke,
    voltage
  };
};

export const calculateCapacitorValue = (
  code: string
): {
  value: number | undefined;
  tolerance: string | undefined;
  tke: string | undefined;
  voltage: number | undefined;
} => {
  const { value, multiplier, tolerance, tke, voltage } = parseCode(code);

  return {
    value:
      typeof value === 'number' && typeof multiplier === 'number'
        ? value * 10 ** multiplier
        : undefined,
    tolerance:
      tolerance && tolerance in toleranceMap
        ? toleranceMap[tolerance]
        : undefined,
    tke: tke && tke in tkeMap ? tkeMap[tke] : undefined,
    voltage: voltage && voltage in voltageMap ? voltageMap[voltage] : undefined
  };
};
