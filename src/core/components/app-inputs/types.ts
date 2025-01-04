import { TextFieldProps } from '@mui/material';

export type AppTextFieldProps = TextFieldProps;

export type AppNumberFieldProps = Omit<AppTextFieldProps, 'type'> & {
  value?: null | number;
  onChange?: (value: number) => void;
};
