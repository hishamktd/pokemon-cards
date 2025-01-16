import React, { FC, memo } from 'react';

import { ICONS } from '@/constants/icons';
import IconButton from '@core/components/icon-button';

import { ActionButtonProps, ActionItems } from './types';

const { EDIT_ANIMATED, DELETE_ANIMATED } = ICONS;

const actions: ActionItems = {
  edit: { icon: EDIT_ANIMATED, toolTip: 'Edit' },
  delete: { icon: DELETE_ANIMATED, toolTip: 'Delete' },
};

const ActionButton: FC<ActionButtonProps> = ({ for: actionType }) => {
  return <IconButton {...actions[actionType]} />;
};

export default memo(ActionButton);
