import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import { memo, useCallback } from 'react';

import { ICONS } from '@/constants/icons';
import { Any } from '@/types';

import { AppSelectProps } from '.';
import IconButton from '../icon-button';

const { CLOSE } = ICONS;

const SelectField = (props: AppSelectProps) => {
  const {
    variant = 'outlined',
    options,
    value,
    onChange,
    label = '',
    placeHolder = 'Select',
    color = 'primary',
    inputLabelProps,
    selectProps = {},
    size = 'small',
    helperText,
    error,
    isClearable = true,
    ...rest
  } = props;

  const renderIconComponent = useCallback(() => {
    if (!isClearable) return;
    return (
      <IconButton
        icon={CLOSE}
        disabled={!value}
        onClick={() => onChange && onChange('' as Any)}
        color={error ? 'error' : color}
      />
    );
  }, [color, error, isClearable, onChange, value]);

  return (
    <FormControl
      variant={variant}
      sx={{ m: 1, minWidth: 300 }}
      size={size}
      color={color}
      error={error}
      {...rest}
    >
      <InputLabel id="select-label" size="small" {...inputLabelProps}>
        {label}
      </InputLabel>
      <Select
        labelId="select-label"
        id="select"
        value={value || ''}
        onChange={(e) => onChange && onChange((e.target.value as Any) || '')}
        label={label}
        color={color}
        SelectDisplayProps={{ color }}
        size={size}
        MenuProps={{
          color,
        }}
        IconComponent={renderIconComponent}
        {...selectProps}
      >
        {isClearable && (
          <MenuItem value="" color={color}>
            <em>{placeHolder}</em>
          </MenuItem>
        )}
        {options.map((option) => (
          <MenuItem key={option} value={option} color={color}>
            {option}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
};

export default memo(SelectField);
