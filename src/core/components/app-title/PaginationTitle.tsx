import React, { FC, memo } from 'react';

import { ActionTitle, PaginationTitleProps } from '.';
import { AppPagination } from '../pagination';

const PaginationTitle: FC<PaginationTitleProps> = ({
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

export default memo(PaginationTitle);
