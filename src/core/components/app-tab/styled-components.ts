'use client';

import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import hexToRGBA from '@/utils/hex-to-rgba';

export const HorizontalWrapper = styled(Box)(({ theme }) => ({
  '& .MuiTab-root': {
    textTransform: 'none',
    letterSpacing: 0.4,
    color: theme.palette.common.black,
    textAlign: 'start',
  },

  '& .MuiTabs-indicator': {
    left: 0,
    width: '3px',
    backgroundColor: theme.palette.primary.main,
  },

  '&.vertical': {
    flexGrow: 1,
    display: 'flex',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme?.palette?.common?.white,

    '& .MuiTabs-root': {
      minWidth: 180,
      borderTopLeftRadius: theme.shape.borderRadius,
      borderBottomLeftRadius: theme.shape.borderRadius,
    },

    '& .MuiTab-root': {
      alignItems: 'flex-start',
      transition: 'background-color 200ms',

      '&.Mui-selected': {
        color: theme.palette.primary.main,
        backgroundColor: hexToRGBA(theme.palette.primary.main, 0.1),
      },
    },
  },

  '& .vertical-tabs': {
    borderRight: `1px solid ${theme.palette.grey[300]}`,
  },

  '& .vertical-panels': {
    width: '100%',
    padding: theme.spacing(6),
  },

  '&.horizontal': {
    '& .MuiTabs-root': {
      boxShadow: theme.shadows[6],
      borderRadius: theme.shape.borderRadius,
      backgroundColor: theme.palette.common.white,
    },
  },

  '&.horizontal.outlined': {
    '& .MuiTabs-root': {
      border: `1px solid ${theme.palette.divider}`,
      boxShadow: 'none',
    },
  },

  '& .horizontal-panels': {
    marginTop: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.common.white,
  },
}));
