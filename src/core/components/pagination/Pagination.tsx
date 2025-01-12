import MuiPagination from '@mui/material/Pagination';
import React, { FC, memo, useMemo } from 'react';

import { getTotalPage } from '@/utils/pagination';

import { AppPaginationProps } from '.';

const Pagination: FC<AppPaginationProps> = ({ totalCount = 0, ...props }) => {
  const count = useMemo<number>(() => getTotalPage(totalCount), [totalCount]);

  return (
    <MuiPagination
      color="primary"
      variant="outlined"
      count={count}
      showFirstButton
      showLastButton
      siblingCount={1}
      {...props}
    />
  );
};

export default memo(Pagination);
