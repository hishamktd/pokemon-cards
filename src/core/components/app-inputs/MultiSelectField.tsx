import {
  Box,
  Chip,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  Theme,
  useTheme,
} from '@mui/material';
import React, { FC, memo, useCallback } from 'react';

import { AppMultiSelectProps } from '.';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
      backgroundColor: 'primary',
    },
  },
};

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight: personName.includes(name)
      ? theme.typography.fontWeightMedium
      : theme.typography.fontWeightRegular,
  };
}

const MultiSelectField: FC<AppMultiSelectProps> = ({
  values = [],
  onChange,
  inputProps,
  sx,
  options = [],
  label = '',
  size = 'small',
  inputLabelProps,
  helperText,
  color = 'primary',
  ...rest
}) => {
  const theme = useTheme();

  const handleChange = useCallback(
    (e: SelectChangeEvent<typeof values>) => {
      const {
        target: { value },
      } = e;

      if (onChange) {
        if (typeof value === 'string') {
          onChange(value.split(','));
        } else {
          onChange(value);
        }
      }
    },
    [onChange],
  );

  const renderSelectedValues = useCallback(
    (selected: string[]) => {
      return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
          {selected.map((value) => (
            <Chip key={value} label={value} color={color} />
          ))}
        </Box>
      );
    },
    [color],
  );

  return (
    <FormControl
      sx={{ m: 1, width: 300, ...sx }}
      size={size}
      color={color}
      {...rest}
    >
      <InputLabel
        id="multiple-chip-label"
        size="small"
        color={color}
        {...inputLabelProps}
      >
        {label}
      </InputLabel>
      <Select
        labelId="multiple-chip-label"
        id="multiple-chip"
        multiple
        value={values}
        onChange={handleChange}
        input={
          <OutlinedInput
            id="select-multiple-chip"
            label="Chip"
            size={size}
            color={color}
            {...inputProps}
          />
        }
        renderValue={(selected) => renderSelectedValues(selected)}
        MenuProps={MenuProps}
      >
        {options.map((option) => (
          <MenuItem
            key={option}
            value={option}
            style={getStyles(option, values, theme)}
          >
            {option}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
};

export default memo(MultiSelectField);
