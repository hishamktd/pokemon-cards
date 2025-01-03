import { Box, Button } from '@mui/material';
import React, { FC, memo } from 'react';

import { ICONS } from '@/constants/icons';

import { AppButtonProps } from './types';
import Icon from '../icon';
import { LoadingButton } from './styled-components';

const { LOADING } = ICONS;

const AppButton: FC<AppButtonProps> = ({
  variant = 'contained',
  loading,
  onClick,
  children,
  size = 'medium',
  ...rest
}) => {
  if (loading) {
    return (
      <LoadingButton
        variant={variant}
        disableElevation
        disableTouchRipple
        size={size}
        {...rest}
      >
        <Box className="content">{children}</Box>
        <Icon className="icon" icon={LOADING} fontSize={size} />
      </LoadingButton>
    );
  }

  return (
    <Button variant={variant} size={size} onClick={onClick} {...rest}>
      {children}
    </Button>
  );
};

export default memo(AppButton);
