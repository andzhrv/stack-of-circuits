import { calculateSmdResistorValue } from '../utils';

describe('calculateSmdResistorValue util', () => {
  test('code "0" to equal 0', () => {
    expect(calculateSmdResistorValue('0')).toBe(0);
  });

  test('code "450" to equal 45', () => {
    expect(calculateSmdResistorValue('450')).toBe(45);
  });

  test('code "273" to equal 27000', () => {
    expect(calculateSmdResistorValue('273')).toBe(27000);
  });

  test('code "7992" to equal 79900', () => {
    expect(calculateSmdResistorValue('7992')).toBe(79900);
  });

  test('code "1733" to equal 173000', () => {
    expect(calculateSmdResistorValue('1733')).toBe(173000);
  });

  test('code "0R5" to equal 2.3', () => {
    expect(calculateSmdResistorValue('0R5')).toBe(0.5);
  });

  test('code "0R01" to equal 0.01', () => {
    expect(calculateSmdResistorValue('0R01')).toBe(0.01);
  });

  test('code "2R3" to equal 2.3', () => {
    expect(calculateSmdResistorValue('2R3')).toBe(2.3);
  });

  test('code "R382" to equal 0.382', () => {
    expect(calculateSmdResistorValue('R382')).toBe(0.382);
  });

  test('code "R068" to equal 0.068', () => {
    expect(calculateSmdResistorValue('R068')).toBe(0.068);
  });

  test('EIA-96 code "01Y" to equal 1', () => {
    expect(calculateSmdResistorValue('01Y')).toBe(1);
  });

  test('EIA-96 code "96F" to equal 97600000', () => {
    expect(calculateSmdResistorValue('96F')).toBe(97600000);
  });

  test('EIA-96 code "68D" to equal 499000', () => {
    expect(calculateSmdResistorValue('68D')).toBe(499000);
  });

  test('EIA-96 code "30A" to equal 200', () => {
    expect(calculateSmdResistorValue('30A')).toBe(200);
  });

  test('EIA-96 code "96X" to equal 97.6', () => {
    expect(calculateSmdResistorValue('96X')).toBe(97.6);
  });

  test('EIA-96 code "09C" to equal 12100', () => {
    expect(calculateSmdResistorValue('09C')).toBe(12100);
  });
});
