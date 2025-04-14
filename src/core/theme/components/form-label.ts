import colors from '@/utils/colors';

import { ComponentsProps, MuiFormLabel } from '../types';

const {
  common: { black, white },
} = colors;

const formLabel = ({ settings: { theme } }: ComponentsProps): MuiFormLabel => ({
  styleOverrides: {
    root: {
      color: theme === 'dark' ? white : black,
    },
  },
});

export default formLabel;
