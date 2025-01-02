import { AppBar as MuiAppBar, Toolbar, Typography } from '@mui/material';
import React, { memo } from 'react';

import MenuButton from './components/MenuButton';

type Props = {
  isLogged?: boolean;
};

const AppBar: React.FC<Props> = () => {
  return (
    <MuiAppBar position="static">
      <Toolbar>
        <MenuButton />
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Simple App Bar
        </Typography>
        {/* <IconButton color="inherit" onClick={handleThemeSwitch}>
          {darkMode ? <Brightness7 /> : <Brightness4 />}
        </IconButton> */}
      </Toolbar>
    </MuiAppBar>
  );
};

export default memo(AppBar);
