'use client';

import { GridColDef } from '@mui/x-data-grid';
import React, { memo, useCallback, useEffect, useMemo } from 'react';

import {
  useDeleteExpansionMutation,
  useGetExpansionsQuery,
} from '@/api/masters/expansion.api';
import ActionButton from '@/components/action-button';
import { ImageChip } from '@/components/chips';
import DeleteModal from '@/components/delete-modal';
import Page from '@/components/page';
import { KeyActionEnum } from '@/enum/key-actions';
import { DeleteItem, TId } from '@/types';
import { type Expansion } from '@/types/masters/expansion';
import { getOrDefault } from '@/utils/common';
import { INITIAL_PAGE, PAGE_SIZE } from '@/utils/pagination';
import ExpansionDrawer from '@/views/masters/expansion/ExpansionDrawer';
import { AppDataGrid } from '@core/components/app-table';
import { PaginationSearchTitle } from '@core/components/app-title';
import useQuery from '@core/hooks/use-query';

const Expansions = () => {
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
  } = useGetExpansionsQuery(
    {
      page,
      query,
      size: PAGE_SIZE,
      sortBy,
      order,
    },
    {
      pollingInterval: 10000,
      refetchOnFocus: true,
    },
  );
  const [deleteExpansion, { isLoading: isDeleting, isSuccess: isDeleted }] =
    useDeleteExpansionMutation();

  const handleSearch = useCallback(
    (value: string) => {
      setQuery(value);
      setPage(INITIAL_PAGE);
    },
    [setQuery, setPage],
  );

  const refetchExpansions = useCallback(() => {
    refetch();
  }, [refetch]);

  const handleDelete = useCallback(
    (id: number, name?: string) => {
      setItemToDelete({ id, name });
    },
    [setItemToDelete],
  );

  const closeModal = useCallback(() => {
    setItemToDelete(null);
    refetchExpansions();
  }, [setItemToDelete, refetchExpansions]);

  const handleConfirmDelete = useCallback(
    async (id: number) => {
      await deleteExpansion(id);
      closeModal();
    },
    [deleteExpansion, closeModal],
  );

  const toggleDrawer = useCallback(() => {
    setIsOpen((prev) => !prev);
    refetchExpansions();
  }, [setIsOpen, refetchExpansions]);

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
    if (isDeleted) {
      refetchExpansions();
    }
  }, [isDeleted, refetchExpansions]);

  const columns = useMemo<GridColDef<Expansion>[]>(
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
        field: 'imageUrl',
        headerName: 'Image',
        renderCell: ({ row }) => (
          <ImageChip imageUrl={row?.imageUrl} width={60} />
        ),
        sortable: false,
        disableColumnMenu: true,
        flex: 0,
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
          containedButtonProps: {
            label: 'Create',
            onClick: toggleDrawer,
            keyFor: KeyActionEnum.CREATE,
          },
        }}
        paginationProps={{
          totalCount: meta?.itemCount,
          onPageChange: setPage,
          page,
        }}
        searchProps={{ query, onChange: handleSearch }}
      />
      <AppDataGrid
        rows={expansions}
        columns={columns}
        loading={isLoading}
        onSortChange={(field, sort) => {
          setSortBy(field);
          setOrder(sort);
        }}
      />
      <ExpansionDrawer
        open={isOpen}
        onClose={handleCloseDrawer}
        id={editId}
        refetchExpansions={refetchExpansions}
      />
      <DeleteModal
        itemToDelete={itemToDelete}
        onClose={closeModal}
        onDelete={handleConfirmDelete}
        loading={isDeleting}
      />
    </Page>
  );
};

export default memo(Expansions);
