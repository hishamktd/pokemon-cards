'use client';

import { Drawer, List, Box, ListItemButton, Typography } from '@mui/material';
import React, { memo } from 'react';

import { usePathname } from 'next/navigation';

import Icon from '@/@core/components/icon';
import { ICONS } from '@/constants/icons';
import IconButton from '@core/components/icon-button';
import { useSettings } from '@core/hooks/use-settings';
import AppLogo from '@core/layout/app-logo';
import { NavLink, SideBar } from '@core/layout/components/styled-components';

import { SidebarProps } from './types';

const { CLOSE_ANIMATED, DEFAULT_MENU } = ICONS;

const Sidebar: React.FC<SidebarProps> = ({ navItems, children }) => {
  const {
    settings: { navbarOpen: isOpen },
    toggleNavbar,
  } = useSettings();
  const pathname = usePathname();

  return (
    <SideBar>
      <Drawer
        className="drawer"
        variant="persistent"
        open={isOpen}
        elevation={2}
      >
        <Box className="logo-container">
          <AppLogo />
          <IconButton
            onClick={toggleNavbar}
            icon={CLOSE_ANIMATED}
            iconProps={{ hidden: !isOpen }}
            color="primary"
          />
        </Box>
        <List>
          {navItems.map((item) => (
            <NavLink key={item.path} href={item.path} prefetch>
              <ListItemButton
                className="item"
                selected={pathname === item.path}
              >
                <Icon
                  icon={item.icon || DEFAULT_MENU}
                  color="inherit"
                  hidden={!isOpen}
                />
                <Typography className="text">{item.label}</Typography>
              </ListItemButton>
            </NavLink>
          ))}
        </List>
      </Drawer>
      <Box component="main" className="main-content" ml={isOpen ? 24.5 : 0}>
        {children}
      </Box>
    </SideBar>
  );
};

export default memo(Sidebar);
