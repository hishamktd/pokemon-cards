const getOrDefault = <T extends string | number | null | undefined>(
  value: T,
  defaultValue: T = '-' as T,
) => {
  return value || defaultValue;
};

const isValidUrl = (url?: string | null) => {
  if (!url) {
    console.log('url is null');

    return false;
  }
  try {
    console.log('url is not null');

    return Boolean(new URL(url));
  } catch {
    console.log('url is not valid');
    return false;
  }
};

export { getOrDefault, isValidUrl };
