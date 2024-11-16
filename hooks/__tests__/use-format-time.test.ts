import { renderHook } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';

import { useFormatTime } from '../use-format-time';

vi.mock('@/locales/client', () => ({
  useScopedI18n: () => (key: string) => key
}));

const {
  result: { current: formatTime }
} = renderHook(useFormatTime);

describe('formatTime util', () => {
  test('value NaN', () => {
    expect(formatTime(NaN)).toBe('\u2014');
  });

  test('value 0', () => {
    expect(formatTime(0)).toBe('0\u202fseconds');
  });

  test('value 0.2', () => {
    expect(formatTime(0.2)).toBe('0\u202fseconds');
  });

  test('value 0.30000000000000004', () => {
    expect(formatTime(0.30000000000000004)).toBe('0\u202fseconds');
  });

  test('value 0.4999999', () => {
    expect(formatTime(0.4999999)).toBe('0\u202fseconds');
  });

  test('value 0.5', () => {
    expect(formatTime(0.5)).toBe('1\u202fseconds');
  });

  test('value 0.5000000000000004', () => {
    expect(formatTime(0.5000000000000004)).toBe('1\u202fseconds');
  });

  test('value 12', () => {
    expect(formatTime(12)).toBe('12\u202fseconds');
  });

  test('value 59', () => {
    expect(formatTime(59)).toBe('59\u202fseconds');
  });

  test('value 60', () => {
    expect(formatTime(60)).toBe('1\u202fminutes');
  });

  test('value 3600', () => {
    expect(formatTime(3600)).toBe('1\u202fhours');
  });

  test('value 86400', () => {
    expect(formatTime(86400)).toBe('1\u202fdays');
  });

  test('value 86402', () => {
    expect(formatTime(86402)).toBe('1\u202fdays 2\u202fseconds');
  });

  test('value 86500', () => {
    expect(formatTime(86500)).toBe(
      '1\u202fdays 1\u202fminutes 40\u202fseconds'
    );
  });

  test('value 205345', () => {
    expect(formatTime(205345)).toBe(
      '2\u202fdays 9\u202fhours 2\u202fminutes 25\u202fseconds'
    );
  });

  test('value 402345.6', () => {
    expect(formatTime(402345.6)).toBe(
      '4\u202fdays 15\u202fhours 45\u202fminutes 46\u202fseconds'
    );
  });

  test('value 36288023', () => {
    expect(formatTime(36288023)).toBe('420\u202fdays 23\u202fseconds');
  });

  test('value 23.6', () => {
    expect(formatTime(23.6, true)).toBe(
      '23\u202fseconds 600\u202fmilliseconds'
    );
  });

  test('value 48.9', () => {
    expect(formatTime(48.9, true)).toBe(
      '48\u202fseconds 900\u202fmilliseconds'
    );
  });

  test('value 52.009', () => {
    expect(formatTime(52.009, true)).toBe(
      '52\u202fseconds 9\u202fmilliseconds'
    );
  });

  test('value 68.059', () => {
    expect(formatTime(68.059, true)).toBe(
      '1\u202fminutes 8\u202fseconds 59\u202fmilliseconds'
    );
  });
});
