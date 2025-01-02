import { Palette, Theme } from '@mui/material';

import colors from '@/utils/colors';
import { Settings } from '@core/providers/SettingsProvider';

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
} = colors;

const paletteAction: Palette['action'] = {
  ...action,
  hoverOpacity: 0.08,
  selectedOpacity: 0.16,
  disabledOpacity: 0.38,
  focusOpacity: 0.12,
  activatedOpacity: 0.24,
};

const palette = (theme: Theme, settings: Settings): Palette => ({
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

export default palette;
