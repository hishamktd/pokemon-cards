import React, { FC, memo, useMemo } from 'react';

import { AppButtonGroupProps, AppGroupButtonItem, AppButton } from '.';
import { ButtonGroupContainer } from './styled-components';

const ButtonGroup: FC<AppButtonGroupProps> = ({
  containedButtonProps,
  outlinedButtonProps,
  ...rest
}) => {
  const buttons = useMemo<{ [key: string]: AppGroupButtonItem }>(
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
            <AppButton {...rest}>{label}</AppButton>
          </React.Fragment>
        );
      })}
    </ButtonGroupContainer>
  );
};

export default memo(ButtonGroup);
