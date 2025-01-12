import { Box } from '@mui/material';
import React, { FC, memo, useMemo } from 'react';

import { StyledDataGrid } from './styled-component';
import { DataGridProps } from './types';

const DataGrid: FC<DataGridProps> = ({
  wrapperProps,
  columns = [],
  sx,
  ...props
}) => {
  const updatedColumns = useMemo(
    () =>
      columns?.map((c) => ({
        flex: 1,
        minWidth: 100,
        ...c,
      })),
    [columns],
  );

  return (
    <Box {...wrapperProps}>
      <StyledDataGrid columns={updatedColumns} {...props} sx={sx} />
    </Box>
  );
};

export default memo(DataGrid);
