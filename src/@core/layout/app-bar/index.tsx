import { Toolbar, AppBar as MuiAppBar, Box } from '@mui/material';
import React, { memo } from 'react';

import AppLogo from '../app-logo';
import MenuButton from '../components/MenuButton';
import { AppBarWrapper } from '../components/styled-components';

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
        </Toolbar>
      </MuiAppBar>
    </AppBarWrapper>
  );
};

export default memo(AppBar);
