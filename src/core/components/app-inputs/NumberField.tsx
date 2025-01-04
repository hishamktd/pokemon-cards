'use client';

import { InputAdornment, Stack } from '@mui/material';
import { FC, memo, useCallback } from 'react';

import { ICONS } from '@/constants/icons';

import { AppNumberFieldProps } from '.';
import { NumberInput } from './styled-component';
import IconButton from '../icon-button';

const { UP_FILL_ROUNDED, DOWN_FILL_ROUNDED } = ICONS;

const NumberField: FC<AppNumberFieldProps> = ({
  color = 'primary',
  size = 'medium',
  value = null,
  onChange = () => {},
  ...rest
}) => {
  const handleIncrement = useCallback(() => {
    const newValue = (value || 0) + 1;
    if (onChange) onChange(newValue);
  }, [onChange, value]);

  const handleDecrement = useCallback(() => {
    const newValue = (value || 0) - 1;
    if (onChange) onChange(newValue);
  }, [onChange, value]);

  const renderAdornment = useCallback(
    () => (
      <Stack direction="column">
        <IconButton
          icon={UP_FILL_ROUNDED}
          size={size}
          color={color}
          sx={{ pb: 0 }}
          iconProps={{ fontSize: size }}
          onClick={handleIncrement}
        />
        <IconButton
          icon={DOWN_FILL_ROUNDED}
          size={size}
          color={color}
          sx={{ pt: 0 }}
          iconProps={{ fontSize: size }}
          onClick={handleDecrement}
        />
      </Stack>
    ),
    [color, handleDecrement, handleIncrement, size],
  );

  return (
    <NumberInput
      value={value}
      slotProps={{
        input: {
          endAdornment: (
            <InputAdornment position="end">{renderAdornment()}</InputAdornment>
          ),
        },
      }}
      size={size}
      onChange={(e) => {
        const newValue = parseInt(e.target.value, 10);
        if (onChange) onChange(newValue);
      }}
      {...rest}
      type="number"
    />
  );
};

export default memo(NumberField);
