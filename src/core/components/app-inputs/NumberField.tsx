'use client';

import { InputAdornment, Stack } from '@mui/material';
import { FC, memo, useCallback, useState } from 'react';

import { ICONS } from '@/constants/icons';
import { Any } from '@/types';

import { AppNumberFieldProps } from '.';
import { NumberInput } from './styled-component';
import IconButton from '../icon-button';

const { UP_FILL_ROUNDED, DOWN_FILL_ROUNDED } = ICONS;

const NumberField: FC<AppNumberFieldProps> = ({
  color = 'primary',
  size = 'small',
  value = '',
  disabled = false,
  error = false,
  onMouseEnter,
  onMouseLeave,
  onIncrement,
  onDecrement,
  onChange,
  ...rest
}) => {
  const [showAdornment, setShowAdornment] = useState(false);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;

      if (value && onChange) {
        onChange('');
      }
      const numericValue = value.replace(/[^0-9]/g, '');

      if (onChange && numericValue !== '') {
        onChange(parseInt(numericValue, 10));
      }
    },
    [onChange],
  );

  const handleDecrement = useCallback(() => {
    if (onDecrement) onDecrement();
  }, [onDecrement]);

  const handleIncrement = useCallback(() => {
    if (onIncrement) onIncrement();
  }, [onIncrement]);

  const handleMouseEnter = useCallback(
    (e: Any) => {
      setShowAdornment(true);
      if (onMouseEnter) onMouseEnter(e);
    },
    [onMouseEnter],
  );

  const handleMouseLeave = useCallback(
    (e: Any) => {
      setShowAdornment(false);
      if (onMouseLeave) onMouseLeave(e);
    },
    [onMouseLeave],
  );

  const renderAdornment = useCallback(
    () => (
      <Stack direction="column">
        <IconButton
          icon={UP_FILL_ROUNDED}
          size={size}
          color={error ? 'error' : color}
          sx={{ p: 0, visibility: showAdornment ? 'visible' : 'hidden' }}
          iconProps={{ fontSize: 'small' }}
          onClick={handleIncrement}
          disabled={disabled}
        />
        <IconButton
          icon={DOWN_FILL_ROUNDED}
          size={size}
          color={error ? 'error' : color}
          sx={{ p: 0, visibility: showAdornment ? 'visible' : 'hidden' }}
          iconProps={{ fontSize: 'small' }}
          onClick={handleDecrement}
          disabled={disabled}
        />
      </Stack>
    ),
    [
      color,
      disabled,
      error,
      handleDecrement,
      handleIncrement,
      showAdornment,
      size,
    ],
  );

  return (
    <NumberInput
      slotProps={{
        input: {
          endAdornment: (
            <InputAdornment position="end">{renderAdornment()}</InputAdornment>
          ),
        },
      }}
      onChange={handleInputChange}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      value={value}
      size={size}
      color={color}
      disabled={disabled}
      error={error}
      {...rest}
      type="number"
    />
  );
};

export default memo(NumberField);
