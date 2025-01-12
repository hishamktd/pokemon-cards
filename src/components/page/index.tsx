import { Stack } from '@mui/material';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

const Page: React.FC<Props> = ({ children }) => {
  return <Stack gap={2}>{children}</Stack>;
};

export default Page;
