import { useContext } from 'react';

import { Settings } from '@/config/settings';
import { SettingsContext } from '@core/providers/SettingsProvider';

export const useSettings = () => {
  const { settings, updateSettings: setSettings } = useContext(SettingsContext);

  if (settings === undefined || setSettings === undefined) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }

  const toggleNavbar = () => {
    setSettings({ ...settings, navbarOpen: !settings.navbarOpen });
  };

  const toggleTheme = () => {
    setSettings({
      ...settings,
      theme: settings.theme === 'light' ? 'dark' : 'light',
    });
  };

  const updateSettings = (values: Partial<Settings>) => {
    setSettings({ ...settings, ...values });
  };

  return {
    settings,
    toggleNavbar,
    toggleTheme,
    updateSettings,
  };
};
