import { Theme, ThemeOptions } from '@mui/material';

import { Settings } from '@/config/settings';

import components from './components';
import palette from './palette';
import typography from './typography';

const themeOptions = (theme: Theme, settings: Settings): ThemeOptions => {
  return {
    ...theme,
    palette: palette(theme, settings),
    typography: typography(theme),
    components: components({ theme, settings }),
  };
};

export default themeOptions;
