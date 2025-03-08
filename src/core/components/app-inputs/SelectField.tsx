import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import { useTheme } from '@mui/material/styles';
import React, { useCallback, useMemo, useState } from 'react';

import ReactSelect, { SingleValue, MultiValue, ActionMeta } from 'react-select';

import { Any, BaseOption } from '@/types';
import gMemo from '@/utils/memo';

import { getBaseStyles, getBaseTheme } from './theme';
import { SelectProps } from './types';

const AppSelect = <T extends BaseOption>(props: SelectProps<T>) => {
  const {
    label,
    placeholder = 'Choose',
    options = [],
    value,
    isMulti,
    components: passedComponents = {},
    formControlProps = {},
    getOptionValue = (op) => String(op?.id),
    getOptionLabel = (op) => String(op?.name),
    isRequired,
    helperText,
    error = false,
    inputLabelProps,
    onChange,
    ...rest
  } = props;

  const theme = useTheme();

  const [isFocused, setIsFocused] = useState(false);

  const shouldShrink = useMemo(
    () =>
      isFocused ||
      (isMulti ? Array.isArray(value) && value?.length > 0 : Boolean(value)),
    [isFocused, value, isMulti],
  );

  const customComponents: Any = {
    IndicatorSeparator: null,
    ...passedComponents,
  };

  const handleChange = useCallback(
    (newValue: MultiValue<T> | SingleValue<T>, actionMeta: ActionMeta<T>) => {
      if (onChange) {
        if (isMulti) {
          (onChange as (newValue: T[], actionMeta?: ActionMeta<T>) => void)(
            newValue as T[],
            actionMeta,
          );
        } else {
          (onChange as (newValue: T, actionMeta?: ActionMeta<T>) => void)(
            newValue as T,
            actionMeta,
          );
        }
      }
    },
    [onChange, isMulti],
  );

  return (
    <FormControl fullWidth size="small" {...formControlProps}>
      <InputLabel
        shrink={shouldShrink}
        sx={{
          ...(shouldShrink && {
            px: 1,
            backgroundColor: 'transparent',
          }),
          '& .MuiFormLabel-asterisk': {
            color: theme.palette.error.main,
          },
          ...(error && { color: theme.palette.error.main }),
        }}
        required={isRequired}
        {...inputLabelProps}
      >
        {label}
      </InputLabel>
      <ReactSelect<T, boolean>
        menuPlacement="auto"
        options={options}
        isMulti={isMulti}
        value={value}
        components={customComponents}
        placeholder={!shouldShrink ? '' : placeholder}
        styles={getBaseStyles<T>(theme, isMulti, error)}
        theme={(current) => getBaseTheme(current, theme)}
        getOptionValue={getOptionValue}
        getOptionLabel={getOptionLabel}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={handleChange}
        
        {...rest}
      />
      {helperText && (
        <FormHelperText sx={{ color: theme.palette.error.main }}>
          {helperText}
        </FormHelperText>
      )}
    </FormControl>
  );
};

export default gMemo(AppSelect);
