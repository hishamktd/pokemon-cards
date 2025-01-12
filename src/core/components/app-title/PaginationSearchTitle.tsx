import React, { FC, memo } from 'react';

import { ActionTitle, PaginationSearchTitleProps } from '.';
import { AppSearch } from '../app-search';
import { AppPagination } from '../pagination';

const PaginationSearchTitle: FC<PaginationSearchTitleProps> = ({
  paginationProps,
  ...rest
}) => {
  return (
    <ActionTitle
      {...rest}
      renderButtonStart={() => (
        <>
          <AppSearch />
          <AppPagination {...paginationProps} />
        </>
      )}
    />
  );
};

export default memo(PaginationSearchTitle);
