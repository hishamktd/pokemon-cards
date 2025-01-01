"use client";

import { useSettings } from "@core/hooks/use-settings";
import {
  createTheme,
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
  ThemeOptions,
} from "@mui/material";
import React, { memo } from "react";

type ThemeProviderProps = {
  children: React.ReactNode;
};

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const {
    settings: { theme: mode },
  } = useSettings();

  const themeOptions: ThemeOptions = { palette: { mode } };

  const theme = createTheme(themeOptions);

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};

export default memo(ThemeProvider);
