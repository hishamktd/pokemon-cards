import { InputAdornment } from '@mui/material';
import React from 'react';

import { Icon } from '@iconify/react';

import { ICONS } from '@/constants/icons';

import { AppSearchIconProps } from '.';

const { CLOSE, SEARCH } = ICONS;

const SearchIcon: React.FC<AppSearchIconProps> = ({ hasValue, onClear }) => {
  return (
    <InputAdornment position="end">
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 24,
          height: 24,
          transition: 'transform 0.3s ease, opacity 0.3s ease',
          cursor: hasValue ? 'pointer' : 'default',
        }}
        onClick={hasValue ? onClear : undefined}
      >
        <Icon
          icon={hasValue ? CLOSE : SEARCH}
          style={{
            fontSize: 20,
            transform: hasValue ? 'rotate(180deg)' : 'rotate(0deg)',
            opacity: 1,
            transition: 'transform 0.3s ease, opacity 0.3s ease',
          }}
        />
      </div>
    </InputAdornment>
  );
};

export default React.memo(SearchIcon);
