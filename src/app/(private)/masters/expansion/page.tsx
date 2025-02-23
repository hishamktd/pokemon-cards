'use client';

import { GridColDef } from '@mui/x-data-grid';
import React, { memo, useCallback, useEffect, useMemo } from 'react';

import {
  useDeleteExpansionMutation,
  useGetExpansionsQuery,
} from '@/api/masters/expansion.api';
import ActionButton from '@/components/action-button';
import DeleteModal from '@/components/delete-modal';
import Page from '@/components/page';
import { DeleteItem, TId } from '@/types';
import { getOrDefault } from '@/utils/common';
import { INITIAL_PAGE, PAGE_SIZE } from '@/utils/pagination';
import ExpansionDrawer from '@/views/masters/expansion/ExpansionDrawer';
import { AppDataGrid } from '@core/components/app-table';
import { PaginationSearchTitle } from '@core/components/app-title';
import useQuery from '@core/hooks/use-query';

const Expansion = () => {
  const [page, setPage] = useQuery('page', INITIAL_PAGE);
  const [query, setQuery] = useQuery('query', '');
  const [sortBy, setSortBy] = useQuery('sort_by', '');
  const [order, setOrder] = useQuery('order', '');
  const [isOpen, setIsOpen] = useQuery('drawer', false);
  const [editId, setEditId] = useQuery<TId>('id', null);
  const [itemToDelete, setItemToDelete] = useQuery<DeleteItem>(
    'itemToDelete',
    null,
  );

  const {
    data: { data: expansions, meta } = {},
    isLoading,
    refetch,
    isFetching: isRefetching,
  } = useGetExpansionsQuery(
    {
      page,
      query,
      size: PAGE_SIZE,
      sortBy,
      order,
    },
    {
      pollingInterval: 5000,
      refetchOnFocus: true,
      skip: isOpen && !Boolean(itemToDelete),
    },
  );
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
    setEditId(null);
    toggleDrawer();
  }, [setEditId, toggleDrawer]);

  useEffect(() => {
    refetch();
  }, [refetch, page, query]);

  const columns = useMemo<GridColDef[]>(
    () => [
      { field: 'id', headerName: 'ID' },
      { field: 'name', headerName: 'Name' },
      { field: 'totalCards', headerName: 'Total Cards' },
      {
        field: 'points',
        headerName: 'Points',
        renderCell: ({ row }) => getOrDefault(row?.points),
      },
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
        title="Expansions"
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
      <AppDataGrid
        rows={expansions}
        columns={columns}
        loading={isLoading || isRefetching}
        onSortChange={(field, sort) => {
          setSortBy(field);
          setOrder(sort);
        }}
      />
      <ExpansionDrawer open={isOpen} onClose={handleCloseDrawer} id={editId} />
      <DeleteModal
        itemToDelete={itemToDelete}
        onClose={closeModal}
        onDelete={handleConfirmDelete}
        loading={isDeleting}
      />
    </Page>
  );
};

export default memo(Expansion);
