import { CollapseProps, Grid2Props } from '@mui/material';
import { JSX } from 'react';

export type FormField = {
  component: JSX.Element;
  size?: Grid2Props['size'];
  hidden?: boolean;
  collapseDir: CollapseProps['orientation'];
};

export type AppFormRowProps = {
  fields: FormField[];
  spacing?: number;
  alignItems?: Grid2Props['alignItems'];
  justifyContent?: Grid2Props['justifyContent'];
  hidden?: boolean;
  collapseDir: CollapseProps['orientation'];
};
