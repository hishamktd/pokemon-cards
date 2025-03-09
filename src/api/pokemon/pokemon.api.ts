import { createApi } from '@reduxjs/toolkit/query/react';

import { axiosBaseQuery } from '@/lib/axios-base-query';
import { BaseParams, GetAllType, PaginationResponse, TId } from '@/types';
import {
  GetAllPokemonParams,
  GetAllPokemonWithType,
  Pokemon,
  PokemonCreateRequest,
  PokemonUpdateRequest,
} from '@/types/pokemon';

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
    getAllPokemons: builder.query<GetAllType[], GetAllPokemonParams>({
      query: (params) => ({
        url: '/pokemon/all',
        method: 'GET',
        params,
      }),
    }),
    getAllWithType: builder.query<GetAllPokemonWithType[], object>({
      query: () => ({
        url: '/pokemon/all/type',
        method: 'GET',
      }),
    }),
    getPokemons: builder.query<PaginationResponse<Pokemon>, BaseParams>({
      query: (params) => ({
        url: '/pokemon',
        method: 'GET',
        params,
      }),
    }),
    getPokemon: builder.query<Pokemon, TId>({
      query: (id) => ({
        url: `/pokemon/${id ?? 'default'}`,
        method: 'GET',
      }),
    }),
    createPokemon: builder.mutation<Pokemon, PokemonCreateRequest>({
      query: (data) => ({
        url: '/pokemon',
        method: 'POST',
        data,
      }),
    }),
    updatePokemon: builder.mutation<Pokemon, PokemonUpdateRequest>({
      query: (data) => ({
        url: `/pokemon/${data.id}`,
        method: 'PUT',
        data,
      }),
    }),
    deletePokemon: builder.mutation<void, number>({
      query: (id) => ({
        url: `/pokemon/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetAllPokemonsQuery,
  useGetAllWithTypeQuery,
  useGetPokemonsQuery,
  useGetPokemonQuery,
  useCreatePokemonMutation,
  useUpdatePokemonMutation,
  useDeletePokemonMutation,
} = pokemonApi;
