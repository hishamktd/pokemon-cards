import { BoxProps, TypographyProps as MuiTypographyProps } from '@mui/material';

import { AppButtonGroupProps } from '../app-button';
import { IconProps } from '../icon';
import { AppPaginationProps } from '../pagination';

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
  buttonGroupProps?: AppButtonGroupProps;
  containerProps?: BoxProps;
  renderButtonStart?: () => React.ReactNode;
};

export type PaginationSearchTitleProps = ActionTitleProps & {
  paginationProps?: AppPaginationProps;
};
