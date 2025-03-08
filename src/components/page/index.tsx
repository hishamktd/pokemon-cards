import { Stack, StackProps } from '@mui/material';
import React from 'react';

type Props = StackProps & {
  children: React.ReactNode;
};

const Page: React.FC<Props> = ({ children, ...props }) => {
  return (
    <Stack gap={2} {...props}>
      {children}
    </Stack>
  );
};

export default Page;
