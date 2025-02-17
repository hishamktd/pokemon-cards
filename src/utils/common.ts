const getOrDefault = <T extends string | number | null | undefined>(
  value: T,
  defaultValue: T = '-' as T,
) => {
  return value || defaultValue;
};

export { getOrDefault };
