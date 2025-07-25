import { createApi } from '@reduxjs/toolkit/query/react';

import { axiosBaseQuery } from '@/lib/axios-base-query';
import { BaseParams, GetAllType, PaginationResponse, TId } from '@/types';
import { Types, TypesCreateRequest } from '@/types/masters/types';

export const typesApi = createApi({
  reducerPath: 'typesApi',
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
    getAllTypes: builder.query<GetAllType[], void>({
      query: () => ({
        url: '/masters/types/all',
        method: 'GET',
      }),
    }),
    getTypes: builder.query<PaginationResponse<Types>, BaseParams>({
      query: (params) => ({
        url: '/masters/types',
        method: 'GET',
        params,
      }),
    }),
    getType: builder.query<Types, TId>({
      query: (id) => ({
        url: `/masters/types/${id ?? 'default'}`,
        method: 'GET',
      }),
    }),
    createType: builder.mutation<Types, TypesCreateRequest>({
      query: (data) => ({
        url: '/masters/types',
        method: 'POST',
        data,
      }),
    }),
    updateType: builder.mutation<Types, Types>({
      query: (data) => ({
        url: `/masters/types/${data.id}`,
        method: 'PUT',
        data,
      }),
    }),
    deleteType: builder.mutation<void, number>({
      query: (id) => ({
        url: `/masters/types/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetAllTypesQuery,
  useGetTypesQuery,
  useGetTypeQuery,
  useCreateTypeMutation,
  useUpdateTypeMutation,
  useDeleteTypeMutation,
} = typesApi;
