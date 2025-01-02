'use client';

import { createContext, useState } from 'react';

import { Settings, settings as settingsConfig } from '@/config/settings';

type ContextProps = {
  children: React.ReactNode;
};

type SettingsContext = {
  settings: Settings;
  updateSettings: (settings: Settings) => void;
};

const defaultSettingsContext: SettingsContext = {
  settings: settingsConfig,
  updateSettings: () => {},
};

export const SettingsContext = createContext<SettingsContext>(
  defaultSettingsContext,
);

export const SettingsProvider: React.FC<ContextProps> = ({ children }) => {
  const [settings, setSettings] = useState<Settings>(settingsConfig);

  const updateSettings = (newSettings: Settings) => {
    setSettings(newSettings);
  };

  return (
    <SettingsContext.Provider value={{ settings, updateSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};
