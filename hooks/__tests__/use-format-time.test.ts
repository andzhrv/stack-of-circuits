import { describe, expect, test } from 'vitest';

import { useFormatTime } from '../use-format-time';

describe('formatTime util', () => {
  const formatTime = useFormatTime();

  test('value NaN', () => {
    expect(formatTime(NaN)).toBe('\u2014');
  });

  test('value 0', () => {
    expect(formatTime(0)).toBe('0\u2009с');
  });

  test('value 0.2', () => {
    expect(formatTime(0.2)).toBe('0\u2009с');
  });

  test('value 0.30000000000000004', () => {
    expect(formatTime(0.30000000000000004)).toBe('0\u2009с');
  });

  test('value 0.4999999', () => {
    expect(formatTime(0.4999999)).toBe('0\u2009с');
  });

  test('value 0.5', () => {
    expect(formatTime(0.5)).toBe('1\u2009с');
  });

  test('value 0.5000000000000004', () => {
    expect(formatTime(0.5000000000000004)).toBe('1\u2009с');
  });

  test('value 12', () => {
    expect(formatTime(12)).toBe('12\u2009с');
  });

  test('value 59', () => {
    expect(formatTime(59)).toBe('59\u2009с');
  });

  test('value 60', () => {
    expect(formatTime(60)).toBe('1\u2009мин');
  });

  test('value 3600', () => {
    expect(formatTime(3600)).toBe('1\u2009ч');
  });

  test('value 86400', () => {
    expect(formatTime(86400)).toBe('1\u2009д');
  });

  test('value 86402', () => {
    expect(formatTime(86402)).toBe('1\u2009д 2\u2009с');
  });

  test('value 86500', () => {
    expect(formatTime(86500)).toBe('1\u2009д 1\u2009мин 40\u2009с');
  });

  test('value 205345', () => {
    expect(formatTime(205345)).toBe('2\u2009д 9\u2009ч 2\u2009мин 25\u2009с');
  });

  test('value 402345.6', () => {
    expect(formatTime(402345.6)).toBe(
      '4\u2009д 15\u2009ч 45\u2009мин 46\u2009с'
    );
  });

  test('value 36288023', () => {
    expect(formatTime(36288023)).toBe('420\u2009д 23\u2009с');
  });
});
