import { createApi } from '@reduxjs/toolkit/dist/query/react';

import { axiosBaseQuery } from '@/lib/axios-base-query';
import { BaseParams, PaginationResponse } from '@/types';
import { Types } from '@/types/masters/types';

export const typesApi = createApi({
  reducerPath: 'typesApi',
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
    getTypes: builder.query<PaginationResponse<Types>, BaseParams>({
      query: (params: BaseParams) => ({
        url: '/types',
        method: 'GET',
        params,
      }),
    }),
    createType: builder.mutation<Types, Types>({
      query: (data: Types) => ({
        url: '/types',
        method: 'POST',
        data,
      }),
    }),
    updateType: builder.mutation<Types, Types>({
      query: (data: Types) => ({
        url: `/types/${data.id}`,
        method: 'PUT',
        data,
      }),
    }),
    deleteType: builder.mutation<Types, Types>({
      query: (data: Types) => ({
        url: `/types/${data.id}`,
        method: 'DELETE',
        data,
      }),
    }),
    getTypesById: builder.query<Types, number>({
      query: (id: number) => ({
        url: `/types/${id}`,
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useGetTypesQuery,
  useCreateTypeMutation,
  useUpdateTypeMutation,
  useDeleteTypeMutation,
  useGetTypesByIdQuery,
} = typesApi;
