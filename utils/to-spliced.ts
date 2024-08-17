export const toSpliced = <T>(
  arr: T[],
  start: number,
  deleteCount: number,
  ...items: T[]
): T[] => {
  const result = arr.concat();

  result.splice(start, deleteCount, ...items);

  return result;
};
