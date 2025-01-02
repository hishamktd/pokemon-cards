export type Settings = {
  navbarOpen: boolean;
  theme: 'light' | 'dark';
  appName: string;
};

export const settings: Settings = {
  navbarOpen: true,
  theme: 'light',
  appName: 'Material App',
};
