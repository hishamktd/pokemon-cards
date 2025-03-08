import { FC, memo } from 'react';

import { AppTextFieldProps } from '.';
import { CustomTextField } from './styled-component';

const AppTextField: FC<AppTextFieldProps> = ({
  size = 'small',
  fullWidth = true,
  rows,
  ...rest
}) => {
  const multiline = Boolean(rows && Number(rows) > 1);

  const commonProps = {
    size,
    fullWidth,
    rows,
    multiline,
    ...rest,
  };

  return <CustomTextField {...commonProps} autoCapitalize="off" />;
};

export default memo(AppTextField);
