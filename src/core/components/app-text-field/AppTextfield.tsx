import { FC } from 'react';

import { AppTextFieldProps } from '.';
import { CustomTextField } from './styled-component';

const AppTextField: FC<AppTextFieldProps> = ({ size = 'small', ...rest }) => {
  const commonProps = { size, ...rest };

  return <CustomTextField {...commonProps} autoCapitalize="off" />;
};

export default AppTextField;
