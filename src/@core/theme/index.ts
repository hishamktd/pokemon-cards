import { Theme, ThemeOptions } from '@mui/material';

import { Settings } from '@core/providers/SettingsProvider';

import palette from './palette';
import typography from './typography';

const themeOptions = (theme: Theme, settings: Settings): ThemeOptions => {
  return {
    ...theme,
    palette: palette(theme, settings),
    typography: typography(theme),
  };
};

export default themeOptions;
