import {
  FormControlProps,
  InputLabelProps,
  OutlinedInputProps,
  SelectProps,
  TextFieldProps,
} from '@mui/material';

import { Control } from 'react-hook-form';

import { Any, NumStr } from '@/types';

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

export type AppSelectProps = FormControlProps & {
  options: string[];
  label?: string;
  value?: string | null;
  onChange?: SelectProps['onChange'];
  placeHolder?: string;
  inputLabelProps?: InputLabelProps;
  selectProps?: SelectProps;
  helperText?: string | null;
  isClearable?: boolean;
};

type MultiSelectFormControl = Omit<FormControlProps, 'onChange'>;

export type AppMultiSelectProps = MultiSelectFormControl & {
  values?: string[];
  onChange?: (value: string[]) => void;
  inputProps?: OutlinedInputProps;
  options?: string[];
  label?: string;
  helperText?: string | null;
  isClearable?: boolean;
  inputLabelProps?: InputLabelProps;
};

export type FileUploaderProps = {
  control: Control<Any>;
  name: string;
  cropWidth?: number;
  cropHeight?: number;
};
