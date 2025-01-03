import { Theme, ThemeOptions } from '@mui/material';

import { Settings } from '@/config/settings';
import colors from '@/utils/colors';

import palette from './palette';
import typography from './typography';

const themeOptions = (theme: Theme, settings: Settings): ThemeOptions => {
  return {
    ...theme,
    palette: palette(theme, settings),
    typography: typography(theme),
    components: {
      MuiButton: {
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
      },
    },
  };
};

export default themeOptions;
