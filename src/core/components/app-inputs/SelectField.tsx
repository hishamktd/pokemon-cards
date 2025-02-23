import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import { useCallback } from 'react';

import { ICONS } from '@/lib/icons/icons-const';
import { Any, BaseOption } from '@/types';
import gMemo from '@/utils/memo';

import { AppSelectProps } from '.';
import IconButton from '../icon-button';

const { CLOSE } = ICONS;

const SelectField = <T extends BaseOption>(props: AppSelectProps<T>) => {
  const {
    variant = 'outlined',
    options,
    value,
    onChange,
    label = '',
    color = 'primary',
    inputLabelProps,
    selectProps = {},
    defaultValue,
    size = 'small',
    helperText,
    error,
    isClearable = true,
    getOptionsLabel,
    getOptionsValue,
    ...rest
  } = props;

  const renderIconComponent = useCallback(() => {
    if (!isClearable) return;
    return (
      <IconButton
        icon={CLOSE}
        disabled={!value}
        onClick={() => onChange && onChange('')}
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
      <Select<T>
        labelId="select-label"
        id="select"
        defaultValue={defaultValue as Any}
        value={value ?? ('' as Any)}
        onChange={(e) => onChange && onChange(e.target.value as T)}
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
        {options.map((option) => (
          <MenuItem
            key={getOptionsValue?.(option) ?? option?.id ?? ''}
            value={getOptionsLabel?.(option) ?? option?.name ?? ''}
            color={color}
          >
            {getOptionsLabel?.(option) ?? option?.name}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
};

export default gMemo(SelectField);
