import { Palette, Theme } from '@mui/material';

import { Settings } from '@/config/settings';
import colors from '@/utils/colors';

const {
  background,
  error,
  info,
  primary,
  secondary,
  success,
  text,
  warning,
  common,
  divider,
  action,
  grey,
  dark,
} = colors;

const paletteAction: Palette['action'] = {
  ...action,
  hoverOpacity: 0.08,
  selectedOpacity: 0.16,
  disabledOpacity: 0.38,
  focusOpacity: 0.12,
  activatedOpacity: 0.24,
};

const lightPalette = (theme: Theme, settings: Settings): Palette => ({
  ...theme.palette,
  mode: settings.theme,
  contrastThreshold: 3,
  tonalOffset: 0.2,
  primary,
  secondary,
  error,
  info,
  success,
  warning,
  text,
  background,
  common,
  divider,
  action: paletteAction,
  grey,
});

const darkPalette = (theme: Theme, settings: Settings): Palette => ({
  ...theme.palette,
  ...lightPalette(theme, settings),
  ...dark,
  common: {
    black: common.white,
    white: common.black,
    disabled: dark.common.disabled,
  },
});

const palette = (theme: Theme, settings: Settings): Palette => {
  if (settings.theme === 'dark') {
    return { ...darkPalette(theme, settings) };
  }

  return { ...lightPalette(theme, settings) };
};

export default palette;
