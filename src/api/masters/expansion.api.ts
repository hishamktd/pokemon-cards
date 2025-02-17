import { createApi } from '@reduxjs/toolkit/query/react';

import { axiosBaseQuery } from '@/lib/axios-base-query';
import { BaseParams, PaginationResponse, TId } from '@/types';
import { Expansion, ExpansionForm } from '@/types/masters/expansion';

export const expansionApi = createApi({
  reducerPath: 'expansionApi',
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
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
    createExpansion: builder.mutation<Expansion, ExpansionForm>({
      query: (data: ExpansionForm) => ({
        url: '/masters/expansions',
        method: 'POST',
        data,
      }),
    }),
    updateExpansion: builder.mutation<Expansion, Expansion>({
      query: (data: Expansion) => ({
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
  useGetExpansionsQuery,
  useGetExpansionQuery,
  useCreateExpansionMutation,
  useUpdateExpansionMutation,
  useDeleteExpansionMutation,
} = expansionApi;
