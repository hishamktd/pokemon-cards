import { TextField } from '@mui/material';
import { FC } from 'react';

import { AppTextFieldProps } from '.';

const AppTextField: FC<AppTextFieldProps> = ({ size = 'small', ...rest }) => {
  const commonProps = { size, ...rest };

  return <TextField {...commonProps} />;
};

export default AppTextField;
