import React, { FC, memo } from 'react';

import AppBar from '@core/layout/app-bar';

import ThemeProvider from './components/ThemeProvider';

type Props = {
  children: React.ReactNode;
};

const PublicProvider: FC<Props> = ({ children }) => {
  return (
    <ThemeProvider>
      <AppBar />
      {children}
    </ThemeProvider>
  );
};

export default memo(PublicProvider);
