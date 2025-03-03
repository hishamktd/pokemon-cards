import { Control, Path } from 'react-hook-form';

import { BaseOption } from '@/types';
import {
  AppRadioProps,
  AppSelectProps,
  AppSwitchProps,
  AppTextFieldProps,
} from '@core/components/app-inputs';

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

export type SelectControllerProps<
  T extends Record<string, unknown>,
  S extends BaseOption,
> = BaseProps<T> & AppSelectProps<S>;

export type RadioControllerProps<
  T extends Record<string, unknown> = Record<string, unknown>,
> = BaseProps<T> & AppRadioProps;

export type SwitchControllerProps<
  T extends Record<string, unknown> = Record<string, unknown>,
> = BaseProps<T> & AppSwitchProps;
