import { BoxProps, TypographyProps as MuiTypographyProps } from '@mui/material';

import { ButtonGroupProps } from '../app-button';
import { IconProps } from '../icon';

type TypographyProps = Omit<MuiTypographyProps, 'variant'>;

export type TitleProps = {
  title: string;
  variant?: 'small' | 'medium' | 'large';
  weight?: 'light' | 'medium' | 'bold';
  icon?: string;
  iconProps?: IconProps;
  containerProps?: BoxProps;
} & TypographyProps;

export type ActionTitleProps = TitleProps & {
  buttonGroupProps?: ButtonGroupProps;
};
