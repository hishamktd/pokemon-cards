'use client';

import { Box, styled } from '@mui/material';

import { hexToRGB } from '@/utils/hexToRGB';

export const AppBarWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1.5),
  position: 'sticky',
  top: 0,
  left: 'auto',

  ['& .app-bar']: {
    zIndex: theme.zIndex.drawer + 1,
    background: hexToRGB(theme.palette.background.paper, 0.9),
    backdropFilter: 'blur(5px)',
    borderRadius: theme.shape.borderRadius,
    top: 0,
  },
}));
