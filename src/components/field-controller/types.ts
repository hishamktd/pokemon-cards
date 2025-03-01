import { Control, Path } from 'react-hook-form';

import { AppTextFieldProps } from '@core/components/app-inputs';

type BaseProps<T extends Record<string, unknown>> = {
  name: Path<T>;
  control: Control<T>;
  label?: string;
  isRequired?: boolean;
  disabled?: boolean;
};

export type TextFieldControllerProps<T extends Record<string, unknown>> =
  BaseProps<T> & AppTextFieldProps;

export type NumberFieldControllerProps<T extends Record<string, unknown>> =
  BaseProps<T> & {};

export type FileUploadControllerProps<T extends Record<string, unknown>> =
  BaseProps<T> & {
    imageUrl?: string | null;
    cropWidth?: number;
    cropHeight?: number;
  };
