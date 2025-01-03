import React, { FC, memo } from 'react';

import { Title } from '.';
import { ActionTitleContainer } from './styled-components';
import { ActionTitleProps } from './types';
import { ButtonGroup } from '../app-button';

const ActionTitle: FC<ActionTitleProps> = ({
  buttonGroupProps,
  containerProps,
  ...props
}) => {
  return (
    <ActionTitleContainer {...containerProps}>
      <Title {...props} />
      <ButtonGroup {...buttonGroupProps} />
    </ActionTitleContainer>
  );
};

export default memo(ActionTitle);
