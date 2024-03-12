export type UmamiData = Record<string, string | number>;

export interface Umami {
  track: (name: string, data?: UmamiData) => void;
}
