import {
  FormControlProps,
  InputLabelProps,
  SelectProps,
  TextFieldProps,
} from '@mui/material';

export type AppTextFieldProps = TextFieldProps;

export type AppNumberFieldProps = Omit<
  AppTextFieldProps,
  'type' | 'onChange'
> & {
  value?: null | number;
  onChange?: (value: number | null) => void;
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
