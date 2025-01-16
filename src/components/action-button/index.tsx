import React, { FC, memo } from 'react';

import IconButton, { IconButtonProps } from '@core/components/icon-button';
import { ActionButtonProps, ActionItems } from './types';
import { ICONS } from '@/constants/icons';


const {}=ICONS


const actions: ActionItems = {
    create:{}
}

const ActionButton: FC<ActionButtonProps> = ({for}) => {
  return <IconButton />;
};

export default memo(ActionButton);
