'use client';

import { Box, ListItemButton, styled } from '@mui/material';

import { hexToRGB } from '@/utils/hexToRGB';

export const AppBarWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1.5),
  position: 'sticky',
  top: 0,
  left: 'auto',

  ['& .app-bar']: {
    zIndex: theme.zIndex.drawer + 1,
    background: hexToRGB(theme.palette.background.paper, 0.9),
    backdropFilter: 'blur(10px)',
    borderRadius: theme.shape.borderRadius,
    top: 0,

    ['& .toolbar']: {
      ['& .logo-container']: {
        display: 'flex',
        alignItems: 'center',
        gap: theme.spacing(1),
      },
    },
  },
}));

export const SideBarLogoWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(1),
  width: 200,
  minHeight: 60,
  marginLeft: theme.spacing(2),
}));

export const NavItem = styled(ListItemButton)(({ theme }) => ({
  ['&.Mui-selected']: {
    backgroundColor: theme.palette.primary.main,
    color: 'white',

    ['& .MuiListItemIcon-root']: { color: 'white' },
  },
}));
