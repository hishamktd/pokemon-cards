'use client';

import { useState } from 'react';

function useQuery<T>(
  key: string,
  defaultValue: T,
): [T, (value: T | ((prev: T) => T)) => void] {
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
      if (typeof defaultValue === 'object') {
        return JSON.parse(value) as T;
      }
      return value as T;
    } catch {
      return defaultValue;
    }
  };

  const getSearchParam = (): T => {
    if (typeof window === 'undefined') {
      return defaultValue;
    }

    const urlSearchParams = new URLSearchParams(window.location.search);
    return parseValue(urlSearchParams.get(key));
  };

  const [param, setParamState] = useState<T>(getSearchParam);

  const setParam = (value: T | ((prev: T) => T)) => {
    setParamState((prev: T) => {
      const newValue =
        typeof value === 'function' ? (value as (prev: T) => T)(prev) : value;
      const url = typeof window === 'undefined' ? '' : window.location.href;
      const urlSearchParams = new URLSearchParams(new URL(url).search);

      if (newValue !== defaultValue) {
        if (typeof newValue === 'object') {
          urlSearchParams.set(key, JSON.stringify(newValue));
        } else {
          urlSearchParams.set(key, String(newValue));
        }
      } else {
        urlSearchParams.delete(key);
      }

      window.history.replaceState(null, '', '?' + urlSearchParams.toString());
      return newValue;
    });
  };

  return [param, setParam];
}

export default useQuery;
