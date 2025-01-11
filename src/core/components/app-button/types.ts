import { ButtonProps } from '@mui/material';

import { KeyActionEnum } from '@/enum/key-actions';

export type AppButtonProps = ButtonProps & {
  loading?: boolean;
  keyFor?: KeyActionEnum;
  minWidth?: number;
};

export type AppGroupButtonItem = AppButtonProps & {
  isHidden?: boolean;
  label?: string;
};

export type AppButtonGroupProps = {
  containedButtonProps?: AppGroupButtonItem;
  outlinedButtonProps?: AppGroupButtonItem;
  [key: string]: AppGroupButtonItem | undefined;
};
