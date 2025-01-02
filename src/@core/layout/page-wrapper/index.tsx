import { Stack } from '@mui/material';
import React, { memo } from 'react';

type Props = {
  children: React.ReactNode;
};

const PageWrapper: React.FC<Props> = ({ children }) => {
  return (
    <Stack px={2} py={3}>
      {children}
    </Stack>
  );
};

export default memo(PageWrapper);
