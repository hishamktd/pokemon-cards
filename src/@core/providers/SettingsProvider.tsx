'use client';

import { createContext, useState } from 'react';

type ContextProps = {
  children: React.ReactNode;
};

export type Settings = {
  navbarOpen: boolean;
  theme: 'light' | 'dark';
};

type SettingsContext = {
  settings: Settings;
  updateSettings: (settings: Settings) => void;
};

const defaultSettings: Settings = {
  navbarOpen: true,
  theme: 'light',
};

const defaultSettingsContext: SettingsContext = {
  settings: defaultSettings,
  updateSettings: () => {},
};

export const SettingsContext = createContext<SettingsContext>(
  defaultSettingsContext
);

export const SettingsProvider: React.FC<ContextProps> = ({ children }) => {
  const [settings, setSettings] = useState<Settings>(defaultSettings);

  const updateSettings = (newSettings: Settings) => {
    setSettings(newSettings);
  };

  return (
    <SettingsContext.Provider value={{ settings, updateSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};
