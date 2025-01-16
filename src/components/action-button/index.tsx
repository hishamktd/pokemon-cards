import React, { FC, memo } from 'react';

import IconButton from '@core/components/icon-button';

type Props = {
  for: 'edit' | 'delete';
};

const actions: 

const ActionButton: FC<Props> = ({for}) => {
  return <IconButton />;
};

export default memo(ActionButton);
