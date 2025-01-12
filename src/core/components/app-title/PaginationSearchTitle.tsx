import React, { FC, memo } from 'react';

import { ActionTitle, PaginationSearchTitleProps } from '.';
import { AppPagination } from '../pagination';

const PaginationSearchTitle: FC<PaginationSearchTitleProps> = ({
  paginationProps,
  ...rest
}) => {
  return (
    <ActionTitle
      {...rest}
      renderButtonStart={() => <AppPagination {...paginationProps} />}
    />
  );
};

export default memo(PaginationSearchTitle);
