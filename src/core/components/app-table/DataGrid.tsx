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
      columns?.map((c) => {
        if (c.field === 'actions') {
          return {
            flex: 0,
            sortable: false,
            disableColumnMenu: true,
            headerAlign: 'center' as const,
            align: 'center' as const,
            ...c,
          };
        }
        return {
          flex: 1,
          minWidth: 100,
          ...c,
        };
      }),
    [columns],
  );

  return (
    <Box {...wrapperProps}>
      <StyledDataGrid
        disableColumnSelector
        disableRowSelectionOnClick
        disableMultipleRowSelection
        columns={updatedColumns}
        {...props}
        sx={sx}
      />
    </Box>
  );
};

export default memo(DataGrid);
