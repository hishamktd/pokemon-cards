"use client";

import {
  createTheme,
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
  ThemeOptions,
} from "@mui/material";
import React, { memo, useState } from "react";

type ThemeProviderProps = {
  children: React.ReactNode;
};

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  // Define light and dark theme options
  const themeOptions: ThemeOptions = {
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  };

  // Create a theme instance
  const theme = createTheme(themeOptions);

  const handleThemeSwitch = () => {
    setDarkMode(!darkMode);
  };

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};

export default memo(ThemeProvider);
