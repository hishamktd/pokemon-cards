'use client';

import {
  createTheme,
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
  useTheme,
} from '@mui/material';
import React, { memo } from 'react';

import { useSettings } from '@core/hooks/use-settings';
import themeOptions from '@core/theme';

type ThemeProviderProps = {
  children: React.ReactNode;
};

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const muiTheme = useTheme();
  const { settings } = useSettings();

  // const themeOptions: ThemeOptions = { palette: { mode } };

  const theme = createTheme(themeOptions(muiTheme, settings));

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};

export default memo(ThemeProvider);
