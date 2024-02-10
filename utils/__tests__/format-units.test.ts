import { formatUnits, Unit } from '../format-units';

describe('formatUnits util', () => {
  test('value undefined to equal "—"', () => {
    expect(formatUnits(undefined, Unit.Resistance)).toBe('\u2014');
  });

  test('value NaN to equal "—"', () => {
    expect(formatUnits(NaN, Unit.Resistance)).toBe('\u2014');
  });

  test('value -1 to equal "—"', () => {
    expect(formatUnits(-1, Unit.Resistance)).toBe('\u2014');
  });

  test('value 0 to equal "0 Ом"', () => {
    expect(formatUnits(0, Unit.Resistance)).toBe('0 Ом');
  });

  test('value 0.0001 to equal "0 Ом"', () => {
    expect(formatUnits(0.0001, Unit.Resistance)).toBe('0 Ом');
  });

  test('value 0.01 to equal "0.01 Ом"', () => {
    expect(formatUnits(0.01, Unit.Resistance)).toBe('0.01 Ом');
  });

  test('value 45 to equal "45 Ом"', () => {
    expect(formatUnits(45, Unit.Resistance)).toBe('45 Ом');
  });

  test('value 27000 to equal "27 кОм"', () => {
    expect(formatUnits(27000, Unit.Resistance)).toBe('27 кОм');
  });

  test('value 79900 to equal "79,9 кОм"', () => {
    expect(formatUnits(79900, Unit.Resistance)).toBe('79.9 кОм');
  });

  test('value 173000 to equal "173 кОм"', () => {
    expect(formatUnits(173000, Unit.Resistance)).toBe('173 кОм');
  });

  test('value 999000000 to equal "999 МОм"', () => {
    expect(formatUnits(999000000, Unit.Resistance)).toBe('999 МОм');
  });

  test('value 999346700 to equal "999.347 МОм"', () => {
    expect(formatUnits(999346700, Unit.Resistance)).toBe('999.347 МОм');
  });

  test('value 28000000000 to equal "28 ГОм"', () => {
    expect(formatUnits(28000000000, Unit.Resistance)).toBe('28 ГОм');
  });

  test('value 3400000000000 to equal "3400 ГОм"', () => {
    expect(formatUnits(3400000000000, Unit.Resistance)).toBe('3400 ГОм');
  });
});
