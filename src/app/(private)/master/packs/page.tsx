'use client';

import { GridColDef } from '@mui/x-data-grid';
import React, { memo, useMemo } from 'react';

import Page from '@/components/page';
import usePacksStore from '@/store/master/packs';
import { AppDataGrid } from '@core/components/app-table';
import { ActionTitle } from '@core/components/app-title';

const Packs = () => {
  const { entities } = usePacksStore();

  const columns = useMemo<GridColDef[]>(
    () => [
      { field: 'id', headerName: 'ID' },
      { field: 'name', headerName: 'Name' },
      { field: 'totalCards', headerName: 'Total Cards' },
      { field: 'actions', headerName: 'Actions', align: 'right' },
    ],
    [],
  );

  return (
    <Page>
      <ActionTitle
        title="Packs"
        variant="small"
        buttonGroupProps={{ containedButtonProps: { label: 'Create' } }}
      />
      <AppDataGrid
        rows={entities}
        columns={columns}
        pageSizeOptions={[10]}
        initialState={{
          pagination: {
            paginationModel: { pageSize: 10 },
          },
        }}
      />
    </Page>
  );
};

export default memo(Packs);
