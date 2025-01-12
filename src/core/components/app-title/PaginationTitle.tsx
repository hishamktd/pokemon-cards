import React, { FC, memo } from 'react';

import { ActionTitle, PaginationTitleProps } from '.';

const PaginationTitle: FC<PaginationTitleProps> = ({ ...rest }) => {
  return <ActionTitle {...rest} />;
};

export default memo(PaginationTitle);
