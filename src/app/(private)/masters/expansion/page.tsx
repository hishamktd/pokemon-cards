'use client';

import { GridColDef } from '@mui/x-data-grid';
import React, { memo, useCallback, useMemo } from 'react';

import {
  useDeleteExpansionMutation,
  useGetExpansionsQuery,
} from '@/api/masters/expansion.api';
import ActionButton from '@/components/action-button';
import DeleteModal from '@/components/delete-modal';
import Page from '@/components/page';
import { DeleteItem } from '@/types';
import { INITIAL_PAGE } from '@/utils/pagination';
import PacksDrawer from '@/views/masters/packs/PacksDrawer';
import { AppDataGrid } from '@core/components/app-table';
import { PaginationSearchTitle } from '@core/components/app-title';
import useQuery from '@core/hooks/use-query';

const Packs = () => {
  const [page, setPage] = useQuery('page', INITIAL_PAGE);
  const [query, setQuery] = useQuery('query', '');
  const [isOpen, setIsOpen] = useQuery('drawer', false);
  const [editId, setEditId] = useQuery('id', 0);
  const [itemToDelete, setItemToDelete] = useQuery<DeleteItem>(
    'itemToDelete',
    null,
  );

  const { data: expansions, isLoading } = useGetExpansionsQuery({
    page,
    query,
  });
  const [deleteExpansion, { isLoading: isDeleting }] =
    useDeleteExpansionMutation();

  const handleDelete = useCallback(
    (id: number, name?: string) => {
      setItemToDelete({ id, name });
    },
    [setItemToDelete],
  );

  const closeModal = useCallback(() => {
    setItemToDelete(null);
  }, [setItemToDelete]);

  const handleConfirmDelete = useCallback(
    async (id: number) => {
      await deleteExpansion(id);
      closeModal();
    },
    [deleteExpansion, closeModal],
  );

  const toggleDrawer = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, [setIsOpen]);

  const handleOnEdit = useCallback(
    (id: number) => {
      setEditId(id);
      toggleDrawer();
    },
    [setEditId, toggleDrawer],
  );

  const handleCloseDrawer = useCallback(() => {
    setEditId(0);
    toggleDrawer();
  }, [setEditId, toggleDrawer]);

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
          totalCount: expansions?.totalCount,
          onPageChange: setPage,
          page,
        }}
        searchProps={{ query, onChange: setQuery }}
      />
      <AppDataGrid
        rows={expansions?.entities}
        columns={columns}
        loading={isLoading}
      />
      <PacksDrawer open={isOpen} onClose={handleCloseDrawer} id={editId} />
      <DeleteModal
        itemToDelete={itemToDelete}
        onClose={closeModal}
        onDelete={handleConfirmDelete}
        loading={isDeleting}
      />
    </Page>
  );
};

export default memo(Packs);
