import React, { memo } from "react";
import { AppBar as MuiAppBar, Toolbar, Typography } from "@mui/material";

const AppBar = () => {
  return (
    <MuiAppBar position="static">
      <Toolbar>
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
