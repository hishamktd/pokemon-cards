import { useState, useEffect } from 'react';

function useQuery(key: string) {
  const getSearchParam = () => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    return urlSearchParams.get(key) || '';
  };

  const [param, setParam] = useState<string>(getSearchParam);

  useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    if (param) {
      urlSearchParams.set(key, param);
    } else {
      urlSearchParams.delete(key);
    }
    window.history.replaceState(null, '', '?' + urlSearchParams.toString());
  }, [param, key]);

  return [param, setParam] as const;
}

export default useQuery;
