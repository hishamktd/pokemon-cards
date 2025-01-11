import React, { FC, memo } from 'react';

import { Title } from '.';
import { ActionTitleContainer } from './styled-components';
import { ActionTitleProps } from './types';
import { AppButtonGroup } from '../app-button';

const ActionTitle: FC<ActionTitleProps> = ({
  buttonGroupProps,
  containerProps,
  ...props
}) => {
  return (
    <ActionTitleContainer {...containerProps}>
      <Title {...props} />
      <AppButtonGroup {...buttonGroupProps} />
    </ActionTitleContainer>
  );
};

export default memo(ActionTitle);
