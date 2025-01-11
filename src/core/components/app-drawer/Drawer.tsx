import Divider from '@mui/material/Divider';
import MuiDrawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import React, { memo } from 'react';

import { ICONS } from '@/constants/icons';
import { AppButton } from '@/core/components/app-button';
import IconButton from '@/core/components/icon-button';

import { AppDrawerProps } from '.';
import { Content, DrawerFooter, DrawerHeader } from './styled-components';

const { CLOSE } = ICONS;

const Drawer: React.FC<AppDrawerProps> = ({
  open,
  onClose,
  children,
  title,
  onSave,
  showFooter = true,
  loading = false,
  footerContainerProps,
  paperProps = {},
  outlineButtonProps = {},
  filledButtonProps = {},
  contentProps = {},
}) => {
  const outlineProps = {
    label: 'Cancel',
    onClick: onClose,
    fullWidth: true,
    ...outlineButtonProps,
  };

  const filledProps = {
    label: 'Save',
    fullWidth: true,
    ...filledButtonProps,
  };

  const { sx: paperSx, ...paperRest } = paperProps || {};

  return (
    <MuiDrawer
      anchor="right"
      component="form"
      open={open}
      onClose={onClose}
      onSubmit={onSave}
      PaperProps={{
        sx: {
          width: 450,
          borderRadius: 0,
          ...paperSx,
        },
        ...paperRest,
      }}
    >
      <DrawerHeader>
        <Typography className="header">{title}</Typography>
        <IconButton
          className="close"
          onClick={onClose}
          icon={CLOSE}
          toolTip="Close"
        />
      </DrawerHeader>
      <Divider />
      <Content {...contentProps}>
        {loading ? <>Loading...</> : <>{children}</>}
      </Content>
      {showFooter && (
        <DrawerFooter {...footerContainerProps}>
          <AppButton variant="outlined" {...outlineProps}>
            {outlineProps.label}
          </AppButton>
          <AppButton type="submit" {...filledProps}>
            {filledProps.label}
          </AppButton>
        </DrawerFooter>
      )}
    </MuiDrawer>
  );
};

export default memo(Drawer);
