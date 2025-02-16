'use client';

import { GridColDef } from '@mui/x-data-grid';
import React, { memo, useCallback, useMemo } from 'react';

import { useGetTypesQuery } from '@/api/masters/types.api';
import ActionButton from '@/components/action-button';
import Page from '@/components/page';
import { DeleteItem } from '@/types';
import { INITIAL_PAGE } from '@/utils/pagination';
import { AppDataGrid } from '@core/components/app-table';
import { PaginationSearchTitle } from '@core/components/app-title';
import useQuery from '@core/hooks/use-query';

const Types = () => {
  const [page, setPage] = useQuery('page', INITIAL_PAGE);
  const [query, setQuery] = useQuery('query', '');
  const [isOpen, setIsOpen] = useQuery('drawer', false);
  const [editId, setEditId] = useQuery('id', 0);
  const [itemToDelete, setItemToDelete] = useQuery<DeleteItem>(
    'itemToDelete',
    null,
  );
  const { data: { entities: types, meta } = {}, isLoading } = useGetTypesQuery({
    page,
    query,
  });

  console.log({ types, isLoading, isOpen, editId, itemToDelete });

  const toggleDrawer = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, [setIsOpen]);

  const handleDelete = useCallback(
    (id: number, name?: string) => {
      setItemToDelete({ id, name });
    },
    [setItemToDelete],
  );

  const handleOnEdit = useCallback(
    (id: number) => {
      setEditId(id);
      toggleDrawer();
    },
    [setEditId, toggleDrawer],
  );

  const columns = useMemo<GridColDef[]>(
    () => [
      { field: 'id', headerName: 'ID' },
      { field: 'name', headerName: 'Name' },
      { field: 'totalCards', headerName: 'Total Cards' },
      {
        field: 'actions',
        headerName: 'Actions',
        renderCell: ({ row }) => (
          <>
            <ActionButton for="update" id={row?.id} onClick={handleOnEdit} />
            <ActionButton
              for="delete"
              id={row?.id}
              name={row?.name}
              onClick={handleDelete}
            />
          </>
        ),
      },
    ],
    [handleDelete, handleOnEdit],
  );

  return (
    <Page>
      <PaginationSearchTitle
        title="Packs"
        variant="small"
        buttonGroupProps={{
          containedButtonProps: { label: 'Create', onClick: toggleDrawer },
        }}
        paginationProps={{
          totalCount: meta?.itemCount,
          onPageChange: setPage,
          page,
        }}
        searchProps={{ query, onChange: setQuery }}
      />
      <AppDataGrid rows={types} columns={columns} />
    </Page>
  );
};

export default memo(Types);
