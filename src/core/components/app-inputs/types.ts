import {
  FormControlLabelProps,
  FormControlProps,
  InputLabelProps,
  OutlinedInputProps,
  RadioGroupProps,
  RadioProps,
  SelectProps,
  TextFieldProps,
} from '@mui/material';
import { ReactNode } from 'react';

import { Control } from 'react-hook-form';

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

type SingleSelectFormControl = Omit<
  FormControlProps,
  'onChange' | 'defaultValue'
>;

export type AppSelectProps<T extends BaseOption> = SingleSelectFormControl & {
  options: T[];
  label?: string;
  value?: T | '';
  onChange?: (value: T | '') => void;
  placeHolder?: string;
  inputLabelProps?: InputLabelProps;
  selectProps?: SelectProps;
  helperText?: string | null;
  isClearable?: boolean;
  getOptionsLabel?: (option: T) => string;
  defaultValue?: T | '';
};

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
    selectProps?: SelectProps;
  };

export type FileUploaderProps = {
  control: Control<Any>;
  name: string;
  cropWidth?: number;
  cropHeight?: number;
  imageUrl?: string | null;
};

export type RadioType = {
  id: string;
  name: ReactNode;
};

export type AppRadioProps = RadioGroupProps & {
  value?: string;
  row?: boolean;
  radioList?: RadioType[];
  formLabelProps?: Omit<FormControlLabelProps, 'value' | 'label' | 'control'>;
  radioProps?: RadioProps;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    value: string,
  ) => void;
};
