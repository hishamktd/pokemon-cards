'use client';

import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import React, { memo, useCallback, useEffect, useState } from 'react';

import { ICONS } from '@/constants/icons';
import Icon from '@/core/components/icon';
import useDebounce from '@core/hooks/use-debounce';

import { AppSearchProps } from '.';

const { SEARCH } = ICONS;

const Search: React.FC<AppSearchProps> = ({ value = '', onChange }) => {
  const [innerQuery, setInnerQuery] = useState<string>(value);

  const debouncedChange = useDebounce((newValue: string) => {
    if (onChange) {
      onChange(newValue);
    }
  }, 500);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newQuery = e.target.value;
      setInnerQuery(newQuery);
      debouncedChange(newQuery);
    },
    [debouncedChange],
  );

  useEffect(() => {
    setInnerQuery(value);
  }, [value]);

  return (
    <OutlinedInput
      fullWidth
      size="small"
      placeholder="Search"
      value={innerQuery}
      onChange={handleChange}
      startAdornment={
        <InputAdornment position="start">
          <Icon icon={SEARCH} />
        </InputAdornment>
      }
      sx={{
        '& input::placeholder': {
          fontSize: '15px',
        },
      }}
    />
  );
};

export default memo(Search);
