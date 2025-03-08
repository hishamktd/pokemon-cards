import {
  FormControlLabelProps,
  FormControlProps,
  InputLabelProps,
  OutlinedInputProps,
  RadioGroupProps,
  RadioProps,
  SwitchProps,
  TextFieldProps,
} from '@mui/material';
import { ReactNode } from 'react';

import { Control } from 'react-hook-form';
import { ActionMeta, Props as ReactSelectProps } from 'react-select';

import { Any, BaseOption, NumStr } from '@/types';

export type AppTextFieldProps = TextFieldProps;

export type AppNumberFieldProps = Omit<
  AppTextFieldProps,
  'type' | 'onChange'
> & {
  value?: NumStr;
  onChange?: (value: NumStr) => void;
  onIncrement?: () => void;
  onDecrement?: () => void;
};

export type CommonSelectProps = {
  label?: string;
  inputLabelProps?: InputLabelProps;
  error?: boolean;
  helperText?: string;
  formControlProps?: FormControlProps;
  isRequired?: boolean;
};

export type SingleSelectProps<T extends BaseOption> = ReactSelectProps<
  T,
  false
> &
  CommonSelectProps & {
    isMulti?: false;
    onChange?: (newValue: T, actionMeta?: ActionMeta<T>) => void;
  };

export type MultiSelectProps<T extends BaseOption> = ReactSelectProps<T, true> &
  CommonSelectProps & {
    isMulti?: true;
    onChange?: (newValue: T[], actionMeta?: ActionMeta<T>) => void;
  };

export type SelectProps<T extends BaseOption> =
  | SingleSelectProps<T>
  | MultiSelectProps<T>;

// export type SelectProps<T> = ReactSelectProps<T> & {
//   label?: string;
//   value?: T | T[];
//   isMulti?: boolean;
//   closeMenuOnSelect?: boolean;
//   hideSelectedOptions?: boolean;
//   inputLabelProps?: InputLabelProps;
//   isClearable?: boolean;
//   isRequired?: boolean;
//   isDisabled?: boolean;
//   error?: boolean;
//   helperText?: string;
//   formControlProps?: FormControlProps;
//   menuPosition?: 'fixed' | 'absolute';
//   getOptionLabel?: GetOptionLabel<T>;
//   getOptionValue?: GetOptionValue<T>;
//   onChange?: (newValue: T | T[], actionMeta?: ActionMeta<T>) => void;
// };

type MultiSelectFormControl = Omit<FormControlProps, 'onChange'>;

export type AppMultiSelectProps<T extends BaseOption> =
  MultiSelectFormControl & {
    values?: T[];
    onChange?: (value: T[]) => void;
    inputProps?: OutlinedInputProps;
    options?: T[];
    label?: string;
    helperText?: string | null;
    isClearable?: boolean;
    inputLabelProps?: InputLabelProps;
    getOptionsLabel?: (option: T) => string;
    getOptionsValue?: (option: T) => string;
  };

export type FileUploaderProps = {
  control: Control<Any>;
  name: string;
  cropWidth?: number;
  cropHeight?: number;
  imageUrl?: string | null;
};

export type RadioOptions = {
  id: string;
  name: ReactNode;
};

export type AppRadioProps = RadioGroupProps & {
  value?: string;
  label?: ReactNode;
  row?: boolean;
  options?: RadioOptions[];
  formLabelProps?: Omit<FormControlLabelProps, 'value' | 'label' | 'control'>;
  radioProps?: RadioProps;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    value: string,
  ) => void;
};

export type AppSwitchProps = Omit<FormControlLabelProps, 'control'> & {
  switchProps?: SwitchProps;
};
