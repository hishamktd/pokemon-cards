'use client';

import { Box, ListItemButton, styled } from '@mui/material';

export const AppBarWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1.5),
  position: 'sticky',
  top: 0,
  left: 'auto',
  backgroundColor: theme.palette.common.white,

  ['& .app-bar']: {
    backgroundColor: theme.palette.common.white,
    transition: 'all 0.3s ease-in-out',
    zIndex: theme.zIndex.drawer + 1,
    backdropFilter: 'blur(10px)',
    borderRadius: theme.shape.borderRadius,
    top: 0,

    ['& .toolbar']: {
      display: 'flex',
      justifyContent: 'space-between',

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
