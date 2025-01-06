import { FormControlProps, SelectProps, TextFieldProps } from '@mui/material';

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
  color?: SelectProps['color'];
};
