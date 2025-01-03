import { TextField } from '@mui/material';
import { FC } from 'react';

import { AppTextFieldProps } from '.';

const AppTextField: FC<AppTextFieldProps> = ({ ...rest }) => {
  return <TextField {...rest} />;
};

export default AppTextField;
