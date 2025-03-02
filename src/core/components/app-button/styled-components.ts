'use client';

import { Box, Button, styled, Theme } from '@mui/material';

import IconButton from '../icon-button';

export const LoadingButton = styled(Button)({
  position: 'relative',

  ['& .content']: {
    visibility: 'hidden',
  },

  ['& .icon']: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
  },
});

export const ButtonGroupContainer = styled(Box)(({ theme }) => ({
  userSelect: 'none',
  display: 'flex',
  gap: theme.spacing(0.5),
  flexDirection: 'row-reverse',
  width: '100%',
}));

export const ButtonGroupIconButton = styled(IconButton)<{
  color?: keyof Theme['palette'];
}>(({ theme, color = 'secondary' }) => ({
  border: `1px solid ${theme.palette[color].main}`,
  borderRadius: theme.shape.borderRadius,
}));
