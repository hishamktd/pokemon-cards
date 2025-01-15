import { Control, Path } from 'react-hook-form';

type BaseProps<T extends Record<string, unknown>> = {
  name: Path<T>;
  control: Control<T>;
  label?: string;
  isRequired?: boolean;
  disabled?: boolean;
};

export type RenderTextFieldProps<T extends Record<string, unknown>> =
  BaseProps<T> & {};
