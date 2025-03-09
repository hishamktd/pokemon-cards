import { Stack } from '@mui/material';
import React, { memo } from 'react';

import styles from '@/styles/common';

type Props = {
  children: React.ReactNode;
};

const PageWrapper: React.FC<Props> = ({ children }) => {
  return (
    <Stack
      px={2}
      pt={7}
      sx={{ transition: styles.transition.modeTransition, overflow: 'auto' }}
    >
      {children}
    </Stack>
  );
};

export default memo(PageWrapper);
