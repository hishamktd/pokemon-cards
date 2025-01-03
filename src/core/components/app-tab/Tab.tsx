'use client';

import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import * as React from 'react';

import { HorizontalWrapper } from './styled-components';
import TabPanel from './TabPanel';
import { AppTabProps } from './types';

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function AppTab({
  tabs,
  disabled = false,
  orientation = 'horizontal',
  panelContainerProps = {},
  wrapperProps = {},
  variant = 'standard',
  children,
}: AppTabProps) {
  const { className = '', ...rest } = wrapperProps;

  const theme = useTheme();

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

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
        value={value}
        onChange={handleChange}
      >
        {tabs?.map((tab, index) => (
          <Tab
            key={index}
            label={tab?.label}
            disabled={disabled || tab?.disabled}
            {...a11yProps(index)}
            href={tab?.path}
          />
        ))}
      </Tabs>
      <Box {...panelContainerProps} className={`${orientation}-panels`}>
        {tabs?.map((tab, index) => (
          <TabPanel
            key={index}
            value={value}
            index={index}
            dir={theme?.direction}
          >
            {children}
          </TabPanel>
        ))}
      </Box>
    </HorizontalWrapper>
  );
}
