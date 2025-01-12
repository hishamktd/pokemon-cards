import { useState, useEffect } from 'react';

function useQuery<T>(key: string, defaultValue: T): [T, (value: T) => void] {
  const parseValue = (value: string | null): T => {
    if (value === null || value === '') {
      return defaultValue;
    }

    try {
      if (typeof defaultValue === 'number') {
        return Number(value) as T;
      }
      if (typeof defaultValue === 'boolean') {
        return (value === 'true') as T;
      }
      return value as T;
    } catch {
      return defaultValue;
    }
  };

  const getSearchParam = (): T => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    return parseValue(urlSearchParams.get(key));
  };

  const [param, setParam] = useState<T>(getSearchParam);

  useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search);

    if (param !== defaultValue) {
      urlSearchParams.set(key, String(param));
    } else {
      urlSearchParams.delete(key);
    }

    window.history.replaceState(null, '', '?' + urlSearchParams.toString());
  }, [param, key, defaultValue]);

  return [param, setParam];
}

export default useQuery;
