'use client';

import { GridColDef } from '@mui/x-data-grid';
import React, { memo, useCallback, useEffect, useMemo } from 'react';

import ActionButton from '@/components/action-button';
import DeleteModal from '@/components/delete-modal';
import Page from '@/components/page';
import usePacksStore from '@/store/masters/packs';
import { DeleteItem } from '@/types';
import PacksDrawer from '@/views/masters/packs/PacksDrawer';
import { AppDataGrid } from '@core/components/app-table';
import { PaginationSearchTitle } from '@core/components/app-title';
import useQuery from '@core/hooks/use-query';

const Packs = () => {
  const { entities, fetchPacks, totalCount, updateSuccess, updating } =
    usePacksStore();

  const [page, setPage] = useQuery('page', 1);
  const [query, setQuery] = useQuery('query', '');
  const [isOpen, setIsOpen] = useQuery('drawer', false);
  const [itemToDelete, setItemToDelete] = useQuery<DeleteItem>(
    'itemToDelete',
    null,
  );

  const handleDelete = useCallback(
    (id: number, name?: string) => {
      setItemToDelete({ id, name });
    },
    [setItemToDelete],
  );

  const handleConfirmDelete = useCallback((id: number) => {
    console.log('id', id);
  }, []);

  const closeModal = useCallback(() => {
    setItemToDelete(null);
  }, [setItemToDelete]);

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
            <ActionButton for="update" id={row?.id} />
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
    [handleDelete],
  );

  const toggleDrawer = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, [setIsOpen]);

  const handleFetchEntities = useCallback(async () => {
    fetchPacks({ page, query });
  }, [fetchPacks, page, query]);

  useEffect(() => {
    handleFetchEntities();
  }, [handleFetchEntities]);

  useEffect(() => {
    if (updateSuccess) {
      handleFetchEntities();
    }
  }, [updateSuccess, handleFetchEntities]);

  return (
    <Page>
      <PaginationSearchTitle
        title="Packs"
        variant="small"
        buttonGroupProps={{
          containedButtonProps: { label: 'Create', onClick: toggleDrawer },
        }}
        paginationProps={{ totalCount, onPageChange: setPage, page }}
        searchProps={{ query, onChange: setQuery }}
      />
      <AppDataGrid rows={entities} columns={columns} />
      <PacksDrawer open={isOpen} onClose={toggleDrawer} />
      <DeleteModal
        itemToDelete={itemToDelete}
        onClose={closeModal}
        onDelete={handleConfirmDelete}
        loading={updating}
      />
    </Page>
  );
};

export default memo(Packs);
