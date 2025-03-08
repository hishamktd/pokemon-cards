'use client';

import { GridColDef } from '@mui/x-data-grid';
import React, { memo, useCallback, useEffect, useMemo } from 'react';

import { useRouter } from 'next/navigation';

import { useDeleteCardMutation, useGetCardsQuery } from '@/api/cards/cards.api';
import ActionButton from '@/components/action-button';
import { IconTextChip, ImageChip } from '@/components/chips';
import DeleteModal from '@/components/delete-modal';
import Page from '@/components/page';
import routes from '@/constants/common/routes';
import { KeyActionEnum } from '@/enum/key-actions';
import { DeleteItem } from '@/types';
import { Card } from '@/types/cards';
import { INITIAL_PAGE, PAGE_SIZE } from '@/utils/pagination';
import { AppDataGrid } from '@core/components/app-table';
import { PaginationSearchTitle } from '@core/components/app-title';
import useQuery from '@core/hooks/use-query';

const Cards = () => {
  const { push } = useRouter();

  const [page, setPage] = useQuery('page', INITIAL_PAGE);
  const [query, setQuery] = useQuery('query', '');
  const [sortBy, setSortBy] = useQuery('sort_by', '');
  const [order, setOrder] = useQuery('order', '');
  const [itemToDelete, setItemToDelete] = useQuery<DeleteItem>(
    'itemToDelete',
    null,
  );

  const {
    data: { data: cards, meta } = {},
    isLoading,
    refetch,
  } = useGetCardsQuery(
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
  const [deletePokemon, { isLoading: isDeleting, isSuccess: isDeleted }] =
    useDeleteCardMutation();

  const refetchCards = useCallback(() => {
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
    refetchCards();
  }, [setItemToDelete, refetchCards]);

  const handleConfirmDelete = useCallback(
    async (id: number) => {
      await deletePokemon(id);
      closeModal();
    },
    [deletePokemon, closeModal],
  );

  const handleOnCreate = useCallback(
    () => push(`${routes.CARDS_CREATE}`),
    [push],
  );

  const handleOnEdit = useCallback(
    (id: number) => push(`${routes.CARDS}/${id}`),
    [push],
  );

  useEffect(() => {
    if (isDeleted) {
      refetchCards();
    }
  }, [isDeleted, refetchCards]);

  const columns = useMemo<GridColDef<Card>[]>(
    () => [
      { field: 'id', headerName: 'ID' },
      { field: 'name', headerName: 'Name' },
      {
        field: 'imageUrl',
        headerName: 'Image',
        renderCell: ({ row }) => <ImageChip imageUrl={row?.imageUrl} />,
        sortable: false,
        disableColumnMenu: true,
        flex: 0,
      },
      {
        field: 'type.name',
        headerName: 'Type',
        renderCell: ({ row }) => (
          <IconTextChip
            text={row?.type?.name}
            icon={row?.type?.iconUrl}
            color={row?.type?.color}
          />
        ),
        flex: 0,
        minWidth: 170,
        sortable: false,
        disableColumnMenu: true,
      },
      {
        field: 'pokemon.name',
        headerName: 'Pokemon',
        renderCell: ({ row }) => (
          <IconTextChip
            text={row?.pokemon?.name}
            icon={row?.pokemon?.imageUrl}
            color={row?.type?.color}
          />
        ),
        flex: 0,
        minWidth: 170,
        sortable: false,
        disableColumnMenu: true,
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
        title="Cards"
        variant="small"
        buttonGroupProps={{
          containedButtonProps: {
            label: 'Create',
            onClick: handleOnCreate,
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
        rows={cards}
        columns={columns}
        loading={isLoading}
        onSortChange={(field, sort) => {
          setSortBy(field);
          setOrder(sort);
        }}
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

export default memo(Cards);
