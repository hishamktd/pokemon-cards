import React, { FC, memo, useMemo } from 'react';

import { ButtonGroupProps, GroupButtonItem, Button } from '.';
import { ButtonGroupContainer } from './styled-components';

const ButtonGroup: FC<ButtonGroupProps> = ({
  containedButtonProps,
  outlinedButtonProps,
  ...rest
}) => {
  const buttons = useMemo<{ [key: string]: GroupButtonItem }>(
    () => ({
      containedButtonProps: {
        isHidden: false,
        label: 'Save',
        variant: 'contained',
        minWidth: 100,
        ...containedButtonProps,
      },
      outlinedButtonProps: {
        isHidden: true,
        label: 'Cancel',
        variant: 'outlined',
        minWidth: 100,
        ...outlinedButtonProps,
      },
      ...rest,
    }),
    [containedButtonProps, outlinedButtonProps, rest],
  );

  return (
    <ButtonGroupContainer>
      {Object.values(buttons).map((item) => {
        const { isHidden, label, ...rest } = item;
        if (isHidden) return null;

        return (
          <React.Fragment key={label}>
            <Button {...rest}>{label}</Button>
          </React.Fragment>
        );
      })}
    </ButtonGroupContainer>
  );
};

export default memo(ButtonGroup);
