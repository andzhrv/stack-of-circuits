export const resistivityMap = {
  copper: 0.01762,
  aluminum: 0.02785,
  silver: 0.0156,
  gold: 0.023,
  iron: 0.098,
  nichrome: 1.225,
  tin: 0.12,
  nickel: 0.087,
  platinum: 0.107,
  brass: 0.05,
  tungsten: 0.054
} as const;

export type ResistivityKey = keyof typeof resistivityMap;

export const resistivityKeys = Object.keys(resistivityMap) as ResistivityKey[];
