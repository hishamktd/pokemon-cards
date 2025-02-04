'use client';

import { createContext, useEffect, useState } from 'react';

import { Settings, settings as settingsConfig } from '@/config/settings';
import { LOCAL_STORAGE_KEYS } from '@/constants/common/store-keys';

import ToasterProvider from './components/ToasterProvider';

type ContextProps = {
  children: React.ReactNode;
};

type SettingsContext = {
  settings: Settings;
  updateSettings: (settings: Partial<Settings>) => void;
};

const { SETTINGS } = LOCAL_STORAGE_KEYS;

const defaultSettingsContext: SettingsContext = {
  settings: settingsConfig,
  updateSettings: () => {},
};

export const SettingsContext = createContext<SettingsContext>(
  defaultSettingsContext,
);

const cachedSettings = () => {
  try {
    const storedSettings = localStorage.getItem(SETTINGS);
    return storedSettings ? JSON.parse(storedSettings) : settingsConfig;
  } catch (error) {
    console.error('Error reading settings from localStorage:', error);
    return settingsConfig;
  }
};

export const SettingsProvider: React.FC<ContextProps> = ({ children }) => {
  const [settings, setSettings] = useState<Settings>(settingsConfig);

  const updateSettings = (newSettings: Partial<Settings>) => {
    try {
      const updatedSettings = { ...settings, ...newSettings };
      setSettings(updatedSettings);

      localStorage.setItem(SETTINGS, JSON.stringify(updatedSettings));
    } catch (error) {
      console.error('Failed to update settings:', error);
    }
  };

  useEffect(() => {
    const storedSettings = cachedSettings();
    setSettings(storedSettings);
  }, []);

  return (
    <SettingsContext.Provider value={{ settings, updateSettings }}>
      <ToasterProvider />
      {children}
    </SettingsContext.Provider>
  );
};
