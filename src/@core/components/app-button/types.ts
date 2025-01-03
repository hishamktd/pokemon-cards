import { ButtonProps } from '@mui/material';

import { KeyActionEnum } from '@/enum/key-actions';

export type AppButtonProps = ButtonProps & {
  loading?: boolean;
  keyFor?: KeyActionEnum;
};
