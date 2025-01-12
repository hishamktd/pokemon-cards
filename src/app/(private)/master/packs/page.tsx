'use client';

import { GridColDef } from '@mui/x-data-grid';
import React, { memo, useCallback, useEffect, useMemo } from 'react';

import Page from '@/components/page';
import usePacksStore from '@/store/master/packs';
import { AppDataGrid } from '@core/components/app-table';
import { PaginationSearchTitle } from '@core/components/app-title';
import useQuery from '@core/hooks/use-query';

const Packs = () => {
  const { entities, fetchEntities, totalCount } = usePacksStore();

  const [page, setPage] = useQuery('page', 1);
  const [query, setQuery] = useQuery('query', '');

  const columns = useMemo<GridColDef[]>(
    () => [
      { field: 'id', headerName: 'ID' },
      { field: 'name', headerName: 'Name' },
      { field: 'totalCards', headerName: 'Total Cards' },
      {
        field: 'actions',
        headerName: 'Actions',
        align: 'right',
        sortable: false,
        headerAlign: 'center',
        flex: 0,
        minWidth: 200,
      },
    ],
    [],
  );

  const handleFetchEntities = useCallback(async () => {
    fetchEntities({ page });
  }, [fetchEntities, page]);

  useEffect(() => {
    handleFetchEntities();
  }, [handleFetchEntities]);

  return (
    <Page>
      <PaginationSearchTitle
        title="Packs"
        variant="small"
        buttonGroupProps={{ containedButtonProps: { label: 'Create' } }}
        paginationProps={{ totalCount, onPageChange: setPage, page }}
        searchProps={{ query, onChange: setQuery }}
      />
      <AppDataGrid rows={entities} columns={columns} />
    </Page>
  );
};

export default memo(Packs);
