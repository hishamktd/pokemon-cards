import { Pagination } from '@mui/material';
import React, { FC, memo } from 'react';

import { ActionTitle, PaginationTitleProps } from '.';

const PaginationTitle: FC<PaginationTitleProps> = ({ ...rest }) => {
  return (
    <ActionTitle
      {...rest}
      renderButtonStart={() => <Pagination count={10} />}
    />
  );
};

export default memo(PaginationTitle);
