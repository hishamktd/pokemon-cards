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
import React, { useCallback } from 'react';

import { ICONS } from '@/lib/icons/icons-const';
import { Any, BaseOption } from '@/types';
import gMemo from '@/utils/memo';

import { AppMultiSelectProps } from '.';
import IconButton from '../icon-button';

const { CLOSE } = ICONS;

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

const getStyles = <T extends BaseOption>(
  option: T,
  selectedValues: readonly T[],
  theme: Theme,
  getOptionsValue: (opt: T) => string,
) => ({
  fontWeight: selectedValues.some(
    (v) => getOptionsValue(v) === getOptionsValue(option),
  )
    ? theme.typography.fontWeightMedium
    : theme.typography.fontWeightRegular,
});

const deleteIcon = (
  <IconButton
    icon={CLOSE}
    color="inherit"
    size="small"
    iconProps={{ fontSize: 'small' }}
  />
);

const MultiSelectField = <T extends BaseOption>({
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
  getOptionsLabel = (opt) => opt?.name ?? '',
  getOptionsValue = (opt) => String(opt?.id) ?? '',
  isClearable = true,
  error,
  selectProps = {},
  ...rest
}: AppMultiSelectProps<T>) => {
  const theme = useTheme();

  const handleChange = useCallback(
    (e: SelectChangeEvent<T[]>) => onChange?.(e.target.value as T[]),
    [onChange],
  );

  const handleClear = useCallback(() => onChange?.([]), [onChange]);

  const handleOnDelete = useCallback(
    (value: T) => {
      const filteredValue = values.filter(
        (v) => getOptionsValue(v) !== getOptionsValue(value),
      );
      onChange?.(filteredValue ?? []);
    },
    [getOptionsValue, onChange, values],
  );

  const renderSelectedValues = useCallback(
    (selected: T[]) => (
      <Box
        sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}
        onMouseDown={(e) => {
          e.stopPropagation();
          e.preventDefault();
        }}
      >
        {selected.map((value) => (
          <Chip
            key={getOptionsValue(value)}
            label={getOptionsLabel(value)}
            color={color}
            deleteIcon={deleteIcon}
            onDelete={() => handleOnDelete(value)}
          />
        ))}
      </Box>
    ),
    [color, getOptionsLabel, getOptionsValue, handleOnDelete],
  );

  const renderIconComponent = useCallback(
    () =>
      isClearable && (
        <IconButton
          icon={CLOSE}
          disabled={!values.length}
          onClick={handleClear}
          color={error ? 'error' : color}
        />
      ),
    [color, error, isClearable, values.length, handleClear],
  );

  return (
    <FormControl
      sx={{ m: 1, width: 300, ...sx }}
      size={size}
      color={color}
      error={error}
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
      <Select<T[]>
        labelId="multiple-chip-label"
        id="multiple-chip"
        multiple
        value={values as Any}
        defaultValue={[] as Any}
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
        renderValue={renderSelectedValues}
        MenuProps={MenuProps}
        IconComponent={renderIconComponent}
        {...selectProps}
      >
        {options.map((option) => (
          <MenuItem
            key={getOptionsValue(option)}
            value={option as Any}
            style={getStyles(option, values, theme, getOptionsValue)}
          >
            {getOptionsLabel(option)}
          </MenuItem>
        ))}
      </Select>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

export default gMemo(MultiSelectField);
