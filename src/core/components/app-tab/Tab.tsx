'use client';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import * as React from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { HorizontalWrapper } from './styled-components';
import { AppTabProps } from './types';

export default function AppTab({
  tabs,
  disabled = false,
  orientation = 'horizontal',
  panelContainerProps = {},
  wrapperProps = {},
  variant = 'standard',
  children,
}: AppTabProps) {
  const pathname = usePathname();

  const { className = '', ...rest } = wrapperProps;

  return (
    <HorizontalWrapper
      className={`${orientation + className} ${variant}`}
      {...rest}
    >
      <Tabs
        variant="scrollable"
        indicatorColor="secondary"
        textColor="inherit"
        aria-label="full width tabs"
        orientation={orientation}
        className={`${orientation}-tabs`}
        value={tabs?.findIndex((tab) => tab?.path === pathname) || 0}
      >
        {tabs?.map((tab, index) => (
          <Tab
            key={index}
            label={tab?.label}
            disabled={disabled || tab?.disabled}
            href={tab?.path}
            component={Link}
          />
        ))}
      </Tabs>
      <Box {...panelContainerProps} className={`${orientation}-panels`}>
        {children}
      </Box>
    </HorizontalWrapper>
  );
}
