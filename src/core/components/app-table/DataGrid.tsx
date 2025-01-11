import { Box } from '@mui/material';
import React, { FC, memo } from 'react';

import { StyledDataGrid } from './styled-component';
import { DataGridProps } from './types';

const DataGrid: FC<DataGridProps> = ({
  wrapperProps,
  columns = [],
  sx,
  ...props
}) => {
  return (
    <Box {...wrapperProps}>
      <StyledDataGrid columns={columns} {...props} sx={sx} />
    </Box>
  );
};

export default memo(DataGrid);
