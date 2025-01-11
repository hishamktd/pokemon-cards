'use client';

import { Box } from '@mui/material';
import React, { memo, useState } from 'react';

import { AppButton } from '@core/components/app-button';
import { AppDrawer } from '@core/components/app-drawer';

const Drawer = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppButton onClick={() => setOpen(true)}>Open</AppButton>
      <AppDrawer open={open} onClose={() => setOpen(false)} title="Drawer">
        <Box>Content</Box>
      </AppDrawer>
    </>
  );
};

export default memo(Drawer);
