import { Toolbar, AppBar as MuiAppBar, Box } from '@mui/material';
import React, { memo } from 'react';

import AppLogo from '@core/layout/app-logo';
import MenuButton from '@core/layout/components/MenuButton';
import { AppBarWrapper } from '@core/layout/components/styled-components';
import ThemeToggler from '@core/layout/components/ThemeToggler';

type Props = {
  isLogged?: boolean;
};

const AppBar: React.FC<Props> = () => {
  return (
    <AppBarWrapper>
      <MuiAppBar className="app-bar">
        <Toolbar className="toolbar">
          <Box className="logo-container">
            <MenuButton />
            <AppLogo />
          </Box>
          <ThemeToggler />
        </Toolbar>
      </MuiAppBar>
    </AppBarWrapper>
  );
};

export default memo(AppBar);
