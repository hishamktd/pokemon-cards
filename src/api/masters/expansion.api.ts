import { createApi } from '@reduxjs/toolkit/query/react';

import { axiosBaseQuery } from '@/lib/axios-base-query';
import { BaseParams, PaginationResponse, TId } from '@/types';
import {
  Expansion,
  ExpansionAll,
  ExpansionCreate,
} from '@/types/masters/expansion';

export const expansionApi = createApi({
  reducerPath: 'expansionApi',
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
    getAllExpansions: builder.query<ExpansionAll[], void>({
      query: () => ({
        url: '/masters/expansions/all',
        method: 'GET',
      }),
    }),
    getExpansions: builder.query<PaginationResponse<Expansion>, BaseParams>({
      query: (params: BaseParams) => ({
        url: '/masters/expansions',
        method: 'GET',
        params,
      }),
    }),
    getExpansion: builder.query<Expansion, TId>({
      query: (id) => ({
        url: `/masters/expansions/${id ?? 'default'}`,
        method: 'GET',
      }),
    }),
    createExpansion: builder.mutation<Expansion, ExpansionCreate>({
      query: (data) => ({
        url: '/masters/expansions',
        method: 'POST',
        data,
      }),
    }),
    updateExpansion: builder.mutation<Expansion, Expansion>({
      query: (data) => ({
        url: `/masters/expansions/${data.id}`,
        method: 'PUT',
        data,
      }),
    }),
    deleteExpansion: builder.mutation<void, number>({
      query: (id: number) => ({
        url: `/masters/expansions/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetAllExpansionsQuery,
  useGetExpansionsQuery,
  useGetExpansionQuery,
  useCreateExpansionMutation,
  useUpdateExpansionMutation,
  useDeleteExpansionMutation,
} = expansionApi;
