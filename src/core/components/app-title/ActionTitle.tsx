import React, { FC, memo } from 'react';

import { Title } from '.';
import { ActionTitleContainer } from './styled-components';
import { ActionTitleProps } from './types';
import { ButtonGroup } from '../app-button';

const ActionTitle: FC<ActionTitleProps> = ({ buttonGroupProps, ...props }) => {
  return (
    <ActionTitleContainer>
      <Title {...props} />
      <ButtonGroup {...buttonGroupProps} />
    </ActionTitleContainer>
  );
};

export default memo(ActionTitle);
