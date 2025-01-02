'use client';

import React, { memo } from 'react';

import { ICONS } from '@/constants/icons';
import IconButton from '@core/components/icon-button';
import { useSettings } from '@core/hooks/use-settings';

const { MENU } = ICONS;

const MenuButton = () => {
  const {
    settings: { navbarOpen },
    toggleNavbar,
  } = useSettings();

  if (navbarOpen) {
    return null;
  }

  return <IconButton icon={MENU} onClick={toggleNavbar} />;
};

export default memo(MenuButton);
