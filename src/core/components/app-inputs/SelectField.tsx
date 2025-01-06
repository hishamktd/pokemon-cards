import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import { memo } from 'react';

import { Any } from '@/types';

import { AppSelectProps } from '.';

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
    ...rest
  } = props;

  return (
    <FormControl
      variant={variant}
      sx={{ m: 1, minWidth: 300 }}
      size={size}
      color={color}
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
        {...selectProps}
      >
        <MenuItem value="" color={color}>
          <em>{placeHolder}</em>
        </MenuItem>
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
