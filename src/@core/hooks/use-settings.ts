import { useContext } from "react";
import { SettingsContext } from "@core/providers/SettingsProvider";

export const useSettings = () => {
  const { settings, updateSettings } = useContext(SettingsContext);

  if (settings === undefined || updateSettings === undefined) {
    throw new Error("useSettings must be used within a SettingsProvider");
  }

  const toggleNavbar = () => {
    updateSettings({ ...settings, navbarOpen: !settings.navbarOpen });
  };

  const toggleTheme = () => {
    updateSettings({
      ...settings,
      theme: settings.theme === "light" ? "dark" : "light",
    });
  };

  return {
    settings,
    toggleNavbar,
    toggleTheme,
  };
};
