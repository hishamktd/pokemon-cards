import { ButtonProps } from '@mui/material';

import { KeyActionEnum } from '@/enum/key-actions';

export type AppButtonProps = ButtonProps & {
  loading?: boolean;
  keyFor?: KeyActionEnum;
  minWidth?: number;
};

export type GroupButtonItem = AppButtonProps & {
  isHidden?: boolean;
  label?: string;
};

export type ButtonGroupProps = {
  containedButtonProps?: GroupButtonItem;
  outlinedButtonProps?: GroupButtonItem;
  [key: string]: GroupButtonItem | undefined;
};
