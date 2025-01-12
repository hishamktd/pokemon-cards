import { Box } from '@mui/material';
import React, { FC, memo } from 'react';

import { Title } from '.';
import { ActionTitleContainer } from './styled-components';
import { ActionTitleProps } from './types';
import { AppButtonGroup } from '../app-button';

const ActionTitle: FC<ActionTitleProps> = ({
  buttonGroupProps,
  containerProps,
  renderButtonStart,
  ...props
}) => {
  return (
    <ActionTitleContainer {...containerProps}>
      <Title {...props} />
      <Box>
        {renderButtonStart && <>{renderButtonStart()}&nbsp;</>}
        <AppButtonGroup {...buttonGroupProps} />
      </Box>
    </ActionTitleContainer>
  );
};

export default memo(ActionTitle);
