import React, { FC, memo, useMemo } from 'react';

import { ButtonGroupProps, GroupButtonItem, Button } from '.';

const ButtonGroup: FC<ButtonGroupProps> = ({
  containedButtonProps,
  outlinedButtonProps,
  ...rest
}) => {
  const buttons = useMemo<{ [key: string]: GroupButtonItem }>(
    () => ({
      ...rest,
      outlinedButtonProps: {
        isHidden: true,
        label: 'Cancel',
        variant: 'outlined',
        minWidth: 100,
        ...outlinedButtonProps,
      },
      containedButtonProps: {
        isHidden: false,
        label: 'Save',
        variant: 'contained',
        minWidth: 100,
        ...containedButtonProps,
      },
    }),
    [containedButtonProps, outlinedButtonProps, rest],
  );

  return (
    <>
      {Object.values(buttons).map((item, i) => {
        const { isHidden, label, ...rest } = item;
        if (isHidden) return null;

        return (
          <React.Fragment key={label}>
            {i !== 0 && <>&nbsp;</>}
            <Button {...rest}>{label}</Button>
          </React.Fragment>
        );
      })}
    </>
  );
};

export default memo(ButtonGroup);
