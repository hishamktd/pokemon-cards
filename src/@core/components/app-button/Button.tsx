import { Box, Button } from '@mui/material';
import React, { FC, memo, useMemo } from 'react';

import { ICONS } from '@/constants/icons';
import { keyActions } from '@/constants/key-actions';
import useKeyActions from '@core/hooks/use-key-action';

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
  keyFor,
  disabled,
  ...rest
}) => {
  const keyAction = useMemo(
    () => keyActions.find((item) => item.action === keyFor),
    [keyFor],
  );

  const keys = useMemo(() => {
    if (!keyAction) {
      return '';
    }

    return keyAction.modifier
      ? `(${keyAction.modifier}+${keyAction.key})`
      : keyAction.key;
  }, [keyAction]);

  useKeyActions(keyFor, onClick, loading || !keyAction || disabled);

  if (loading) {
    return (
      <LoadingButton
        variant={variant}
        disableElevation
        disableTouchRipple
        size={size}
        disabled={disabled}
        {...rest}
      >
        <Box className="content">
          {children}&nbsp;{keys}
        </Box>
        <Icon className="icon" icon={LOADING} fontSize={size} />
      </LoadingButton>
    );
  }

  console.log('AppButton', keys, keyAction);

  return (
    <Button
      variant={variant}
      disabled={disabled}
      size={size}
      onClick={onClick}
      {...rest}
    >
      {children}&nbsp;{keys}
    </Button>
  );
};

export default memo(AppButton);
