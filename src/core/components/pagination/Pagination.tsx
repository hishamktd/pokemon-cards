import MuiPagination from '@mui/material/Pagination';
import React, { FC, memo } from 'react';

import { AppPaginationProps } from '.';

const Pagination: FC<AppPaginationProps> = (props) => {
  return <MuiPagination color="primary" {...props} />;
};

export default memo(Pagination);
