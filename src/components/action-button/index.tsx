import React, { FC, memo, useCallback } from 'react';

import { ICONS } from '@/constants/icons';
import IconButton from '@core/components/icon-button';

import { ActionButtonProps, ActionItems } from './types';

const { EDIT_ANIMATED, DELETE_ANIMATED } = ICONS;

const actions: ActionItems = {
  edit: { icon: EDIT_ANIMATED, toolTip: 'Edit', color: 'primary' },
  delete: { icon: DELETE_ANIMATED, toolTip: 'Delete', color: 'error' },
};

const ActionButton: FC<ActionButtonProps> = ({
  for: actionType,
  onClick,
  id,
}) => {
  const handleOnClick = useCallback(() => {
    if (onClick) {
      if (typeof id === 'number') {
        onClick(id);
      } else if (typeof id === 'string') {
        onClick(Number(id));
      }
    }
  }, [onClick, id]);

  return <IconButton {...actions[actionType]} onClick={handleOnClick} />;
};

export default memo(ActionButton);
