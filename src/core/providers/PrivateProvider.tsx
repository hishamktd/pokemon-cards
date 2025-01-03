import React, { FC, memo } from 'react';

import AppBar from '@core/layout/app-bar';

import ThemeProvider from './components/ThemeProvider';

type Props = {
  children: React.ReactNode;
};

const PrivateProvider: FC<Props> = ({ children }) => {
  return (
    <ThemeProvider>
      <AppBar isLogged />
      {children}
    </ThemeProvider>
  );
};

export default memo(PrivateProvider);
