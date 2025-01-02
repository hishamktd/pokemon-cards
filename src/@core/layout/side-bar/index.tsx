'use client';

import {
  Drawer,
  List,
  ListItemIcon,
  ListItemText,
  IconButton,
  Box,
} from '@mui/material';
import React, { memo } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import Icon from '@/@core/components/icon';
import { ICONS } from '@/constants/icons';
import { useSettings } from '@core/hooks/use-settings';

import { SidebarProps } from './types';
import AppLogo from '../app-logo';
import { NavItem, SideBarLogoWrapper } from '../components/styled-components';

const { CLOSE_ANIMATED, DEFAULT_MENU } = ICONS;

const Sidebar: React.FC<SidebarProps> = ({ navItems, children }) => {
  const {
    settings: { navbarOpen: isOpen },
    toggleNavbar,
  } = useSettings();
  const pathname = usePathname();

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer variant="persistent" open={isOpen}>
        <SideBarLogoWrapper>
          <AppLogo />
          <IconButton onClick={toggleNavbar} color="primary">
            <Icon icon={CLOSE_ANIMATED} hidden={!isOpen} />
          </IconButton>
        </SideBarLogoWrapper>
        <List>
          {navItems.map((item) => (
            <Link key={item.path} href={item.path} passHref prefetch>
              <NavItem selected={pathname === item.path}>
                <ListItemIcon>
                  <Icon
                    icon={item.icon || DEFAULT_MENU}
                    color="primary"
                    hidden={!isOpen}
                  />
                </ListItemIcon>
                <ListItemText primary={item.label} />
              </NavItem>
            </Link>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          marginLeft: isOpen ? 22.5 : 0,
          transition: 'margin-left 0.3s',
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default memo(Sidebar);
