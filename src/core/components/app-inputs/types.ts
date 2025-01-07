import {
  FormControlProps,
  InputLabelProps,
  SelectProps,
  TextFieldProps,
} from '@mui/material';

import { NumStr } from '@/types';

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
