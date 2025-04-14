import colors from '@/utils/colors';

import { ComponentsProps, MuiButton } from '../types';

const button = ({ settings, theme }: ComponentsProps): MuiButton => ({
  styleOverrides: {
    root: {
      '&.Mui-disabled': {
        color:
          settings.theme === 'dark'
            ? colors.dark.text.disabled
            : theme.palette.text.disabled,
        borderColor:
          settings.theme === 'dark'
            ? colors.dark.text.disabled
            : theme.palette.text.disabled,
      },
    },
  },
});

export default button;
