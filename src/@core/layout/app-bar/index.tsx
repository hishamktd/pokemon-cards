import { Toolbar, Typography, AppBar as MuiAppBar } from '@mui/material';
import React, { memo } from 'react';

import MenuButton from './components/MenuButton';
import { AppBarWrapper } from './components/styled-components';

type Props = {
  isLogged?: boolean;
};

const AppBar: React.FC<Props> = () => {
  return (
    <AppBarWrapper>
      <MuiAppBar className="app-bar">
        <Toolbar className="toolbar">
          <MenuButton />
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Simple App Bar
          </Typography>
        </Toolbar>
      </MuiAppBar>
    </AppBarWrapper>
  );
};

export default memo(AppBar);
