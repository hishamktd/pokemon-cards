import { FC, memo } from 'react';

import { AppTextFieldProps } from '.';
import { CustomTextField } from './styled-component';

const AppTextField: FC<AppTextFieldProps> = ({
  size = 'small',
  fullWidth = true,
  ...rest
}) => {
  const commonProps = { size, fullWidth, ...rest };

  return <CustomTextField {...commonProps} autoCapitalize="off" />;
};

export default memo(AppTextField);
