'use client';

import { GridColDef } from '@mui/x-data-grid';
import React, { memo, useCallback, useEffect, useMemo } from 'react';

import {
  useDeleteTypeMutation,
  useGetTypesQuery,
} from '@/api/masters/types.api';
import ActionButton from '@/components/action-button';
import { ColorChip, ImageChip } from '@/components/chips';
import DeleteModal from '@/components/delete-modal';
import Page from '@/components/page';
import { KeyActionEnum } from '@/enum/key-actions';
import { DeleteItem, TId } from '@/types';
import { type Types } from '@/types/masters/types';
import { INITIAL_PAGE, PAGE_SIZE } from '@/utils/pagination';
import TypesDrawer from '@/views/masters/types/TypesDrawer';
import { AppDataGrid } from '@core/components/app-table';
import { PaginationSearchTitle } from '@core/components/app-title';
import useQuery from '@core/hooks/use-query';

const Types = () => {
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
    data: { data: types, meta } = {},
    isLoading,
    refetch,
  } = useGetTypesQuery(
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

  const [deleteType, { isLoading: isDeleting, isSuccess: isDeleted }] =
    useDeleteTypeMutation();

  const refetchTypes = useCallback(() => {
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
    refetchTypes();
  }, [refetchTypes, setItemToDelete]);

  const handleConfirmDelete = useCallback(
    async (id: number) => {
      await deleteType(id);
      closeModal();
    },
    [deleteType, closeModal],
  );

  const toggleDrawer = useCallback(() => {
    setIsOpen((prev) => !prev);
    refetchTypes();
  }, [setIsOpen, refetchTypes]);

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
      refetchTypes();
    }
  }, [isDeleted, refetchTypes]);

  const columns = useMemo<GridColDef<Types>[]>(
    () => [
      { field: 'id', headerName: 'ID' },
      { field: 'name', headerName: 'Name' },
      {
        field: 'color',
        headerName: 'Color',
        renderCell: ({ row }) => <ColorChip color={row?.color} />,
        sortable: false,
        disableColumnMenu: true,
        flex: 0,
      },
      {
        field: 'iconUrl',
        headerName: 'Icon',
        renderCell: ({ row }) => <ImageChip imageUrl={row?.iconUrl} />,
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
        title="Types"
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
        searchProps={{ query, onChange: setQuery }}
      />
      <AppDataGrid
        rows={types}
        columns={columns}
        loading={isLoading}
        onSortChange={(field, sort) => {
          setSortBy(field);
          setOrder(sort);
        }}
      />
      <TypesDrawer
        open={isOpen}
        id={editId}
        onClose={handleCloseDrawer}
        refetchTypes={refetchTypes}
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

export default memo(Types);
