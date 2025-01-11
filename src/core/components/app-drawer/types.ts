import { BoxProps } from '@mui/material/Box';
import { PaperProps } from '@mui/material/Paper';
import { ElementType, JSX } from 'react';

import { AppButtonProps } from '../app-button';

export type AppDrawerProps = {
  open: boolean;
  children: JSX.Element;
  title?: string;
  component?: ElementType;
  showFooter?: boolean;
  loading?: boolean;
  outlineButtonProps?: AppButtonProps & { label?: string };
  filledButtonProps?: AppButtonProps & { label?: string };
  footerContainerProps?: BoxProps;
  paperProps?: PaperProps;
  contentProps?: BoxProps;
  onClose: () => void;
  onSave?: (e: React.FormEvent<HTMLDivElement>) => void;
};
