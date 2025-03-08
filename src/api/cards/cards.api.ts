import { createApi } from '@reduxjs/toolkit/query/react';

import { axiosBaseQuery } from '@/lib/axios-base-query';
import { BaseParams, GetAllType, PaginationResponse } from '@/types';
import { Cards, CardsCreateReq, CardsUpdateReq } from '@/types/cards';

export const cardsApi = createApi({
  reducerPath: 'cardsApi',
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
    getAllCards: builder.query<GetAllType[], void>({
      query: () => ({
        url: '/cards',
        method: 'GET',
      }),
    }),
    getCards: builder.query<PaginationResponse<Cards>, BaseParams>({
      query: () => ({
        url: '/cards',
        method: 'GET',
      }),
    }),
    getCard: builder.query<Cards, number>({
      query: (id) => ({
        url: `/cards/${id}`,
        method: 'GET',
      }),
    }),
    createCard: builder.mutation<Cards, CardsCreateReq>({
      query: (data) => ({
        url: '/cards',
        method: 'POST',
        data,
      }),
    }),
    updateCard: builder.mutation<Cards, CardsUpdateReq>({
      query: (data) => ({
        url: `/cards/${data.id}`,
        method: 'PUT',
        data,
      }),
    }),
    deleteCard: builder.mutation<void, number>({
      query: (id) => ({
        url: `/cards/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetAllCardsQuery,
  useGetCardsQuery,
  useGetCardQuery,
  useCreateCardMutation,
  useUpdateCardMutation,
  useDeleteCardMutation,
} = cardsApi;
