import colors from '@/utils/colors';

import { ComponentsProps, MuiTypography } from '../types';

const typography = ({ settings }: ComponentsProps): MuiTypography => ({
  styleOverrides: {
    root: {
      color:
        settings?.theme === 'dark'
          ? colors?.common?.white
          : colors?.common?.black,
    },
  },
});

export default typography;
