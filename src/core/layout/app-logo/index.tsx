'use client';

import { Typography } from '@mui/material';
import React, { memo } from 'react';

import { useSettings } from '@core/hooks/use-settings';

const AppLogo = () => {
  const {
    settings: { appName },
  } = useSettings();

  return (
    <Typography variant="h6" color="primary" sx={{ flexGrow: 1 }}>
      {appName}
    </Typography>
  );
};

export default memo(AppLogo);
