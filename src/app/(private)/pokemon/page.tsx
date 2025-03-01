'use client';

import { GridColDef } from '@mui/x-data-grid';
import { memo, useCallback, useEffect, useMemo } from 'react';

import {
  useDeletePokemonMutation,
  useGetPokemonsQuery,
} from '@/api/pokemon/pokemon.api';
import ActionButton from '@/components/action-button';
import { ColorChip, ImageChip } from '@/components/chips';
import DeleteModal from '@/components/delete-modal';
import Page from '@/components/page';
import { KeyActionEnum } from '@/enum/key-actions';
import { DeleteItem, TId } from '@/types';
import { Pokemon } from '@/types/pokemon';
import { INITIAL_PAGE, PAGE_SIZE } from '@/utils/pagination';
import PokemonDrawer from '@/views/pokemon/PokemonDrawer';
import { AppDataGrid } from '@core/components/app-table';
import { PaginationSearchTitle } from '@core/components/app-title';
import useQuery from '@core/hooks/use-query';

const Pokemons = () => {
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
    data: { data: pokemons, meta } = {},
    isLoading,
    refetch,
  } = useGetPokemonsQuery(
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
    useDeletePokemonMutation();

  const refetchPokemons = useCallback(() => {
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
    refetchPokemons();
  }, [setItemToDelete, refetchPokemons]);

  const handleConfirmDelete = useCallback(
    async (id: number) => {
      await deletePokemon(id);
      closeModal();
    },
    [deletePokemon, closeModal],
  );

  const toggleDrawer = useCallback(() => {
    setIsOpen((prev) => !prev);
    refetchPokemons();
  }, [setIsOpen, refetchPokemons]);

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
      refetchPokemons();
    }
  }, [isDeleted, refetchPokemons]);

  const columns = useMemo<GridColDef<Pokemon>[]>(
    () => [
      { field: 'id', headerName: 'ID' },
      { field: 'name', headerName: 'Name' },
      {
        field: 'type.name',
        headerName: 'Type name',
        renderCell: ({ row }) => row?.type?.name,
      },
      {
        field: 'imageUrl',
        headerName: 'Image',
        renderCell: ({ row }) => <ImageChip imageUrl={row?.imageUrl} />,
        sortable: false,
        disableColumnMenu: true,
        flex: 0,
      },
      {
        field: 'type.iconUrl',
        headerName: 'Type Icon',
        renderCell: ({ row }) => <ImageChip imageUrl={row?.type?.iconUrl} />,
        sortable: false,
        disableColumnMenu: true,
        flex: 0,
      },
      {
        field: 'type.color',
        headerName: 'Type Color',
        renderCell: ({ row }) => <ColorChip color={row?.type?.color} />,
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
        title="Pokemons"
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
        rows={pokemons}
        columns={columns}
        loading={isLoading}
        onSortChange={(field, sort) => {
          setSortBy(field);
          setOrder(sort);
        }}
      />
      <PokemonDrawer
        open={isOpen}
        onClose={handleCloseDrawer}
        id={editId}
        refetchPokemons={refetchPokemons}
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

export default memo(Pokemons);
