/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  clearMocks: true,
  extensionsToTreatAsEsm: ['.ts'],
  coverageProvider: 'v8',
  testEnvironment: 'jsdom'
};

export default config;
