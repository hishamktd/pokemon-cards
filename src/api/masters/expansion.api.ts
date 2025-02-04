import { createApi } from '@reduxjs/toolkit/dist/query/react';

import { axiosBaseQuery } from '@/lib/axios-base-query';
import { BaseParams, PaginationResponse } from '@/types';
import { Expansion, ExpansionForm } from '@/types/masters/expansion';

export const expansionApi = createApi({
  reducerPath: 'expansionApi',
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
    getExpansions: builder.query<PaginationResponse<Expansion>, BaseParams>({
      query: (params: BaseParams) => ({
        url: '/expansions',
        method: 'GET',
        params,
      }),
    }),
    getExpansion: builder.query<Expansion, number>({
      query: (id: number) => ({
        url: `/expansions/${id}`,
        method: 'GET',
      }),
    }),
    createExpansion: builder.mutation<Expansion, ExpansionForm>({
      query: (data: ExpansionForm) => ({
        url: '/expansions',
        method: 'POST',
        data,
      }),
    }),
    updateExpansion: builder.mutation<Expansion, Expansion>({
      query: (data: Expansion) => ({
        url: `/expansions/${data.id}`,
        method: 'PUT',
        data,
      }),
    }),
    deleteExpansion: builder.mutation<void, number>({
      query: (id: number) => ({
        url: `/expansions/${id}`,
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
