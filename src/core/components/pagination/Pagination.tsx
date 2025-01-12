import MuiPagination from '@mui/material/Pagination';
import React, { FC, memo } from 'react';

import { PaginationProps } from '.';

const Pagination: FC<PaginationProps> = (props) => {
  return <MuiPagination color="primary" {...props} />;
};

export default memo(Pagination);
