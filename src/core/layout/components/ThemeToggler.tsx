'use client';

import React, { memo, useState } from 'react';

import { ICONS } from '@/constants/icons';
import IconButton from '@core/components/icon-button';
import { useSettings } from '@core/hooks/use-settings';

const { LIGHT_MODE, DARK_MODE } = ICONS;

const ThemeToggler = () => {
  const {
    settings: { theme },
    toggleTheme,
  } = useSettings();

  const [isRotated, setIsRotated] = useState(false);

  const handleClick = () => {
    setIsRotated(!isRotated);
    toggleTheme();
  };

  return (
    <IconButton
      icon={theme === 'light' ? LIGHT_MODE : DARK_MODE}
      color="primary"
      size="large"
      iconProps={{
        fontSize: 'medium',
        style: {
          transition: 'transform 0.3s ease, opacity 0.3s ease',
          transform: isRotated ? 'rotate(0deg)' : 'rotate(180deg)',
          opacity: isRotated ? 0.5 : 1,
        },
      }}
      onClick={handleClick}
    />
  );
};

export default memo(ThemeToggler);
