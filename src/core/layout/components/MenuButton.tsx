'use client';

import React, { memo } from 'react';

import { ICONS } from '@/lib/icons/icons-const';
import IconButton from '@core/components/icon-button';
import { useSettings } from '@core/hooks/use-settings';

const { MENU_ANIMATED } = ICONS;

const MenuButton = () => {
  const {
    settings: { navbarOpen },
    toggleNavbar,
  } = useSettings();

  return (
    <IconButton
      icon={MENU_ANIMATED}
      color="primary"
      onClick={toggleNavbar}
      iconProps={{ hidden: navbarOpen }}
    />
  );
};

export default memo(MenuButton);
