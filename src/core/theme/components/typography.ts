import colors from '@/utils/colors';

import { ComponentsProps, MuiTypography } from '../types';

const {
  common: { black, white },
} = colors;

const typography = ({
  settings: { theme },
}: ComponentsProps): MuiTypography => ({
  styleOverrides: {
    root: {
      color: theme === 'dark' ? white : black,
    },
  },
});

export default typography;
