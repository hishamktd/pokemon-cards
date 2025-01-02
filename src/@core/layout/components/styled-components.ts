'use client';

import { Box, styled } from '@mui/material';

import Link from 'next/link';

import styles from '@/constants/styles';

export const AppBarWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1.5),
  position: 'sticky',
  top: 0,
  left: 'auto',
  backgroundColor: theme.palette.common.white,

  ['& .app-bar']: {
    backgroundColor: theme.palette.common.white,
    transition: styles.transition.modeTransition,
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

export const SideBar = styled(Box)(({ theme }) => ({
  display: 'flex',
  transition: styles.transition.modeTransition,

  ['& .drawer .MuiPaper-elevation0']: {
    transition: styles.transition.modeTransition,
    backgroundColor: theme.palette.background.default,
    borderRight: 'none',
    boxShadow: theme.shadows[5],
  },

  ['& .logo-container']: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing(1),
    width: 180,
    minHeight: 60,
    marginLeft: theme.spacing(2),
  },

  ['& .main-content']: { flexGrow: 1, transition: 'margin-left 0.3s' },
}));

export const NavLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',

  ['& .item']: {
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.primary.main,
    gap: theme.spacing(1.5),
    transition: styles.transition.modeTransition,

    ['&.Mui-selected']: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,

      ['& .text']: {
        transition: styles.transition.modeTransition,
        color: theme.palette.common.white,
      },

      [':hover']: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.secondary.main,
      },
    },

    ['& .text']: {
      color: theme.palette.primary.main,
    },

    [':hover']: {
      color: theme.palette.secondary.main,
    },
  },
}));
