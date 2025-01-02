import { Theme, ThemeOptions } from "@mui/material";
import palette from "./palette";
import { Settings } from "@core/providers/SettingsProvider";

const themeOptions = (theme: Theme, settings: Settings): ThemeOptions => {
  return { ...theme, palette: palette(theme, settings) };
};

export default themeOptions;
