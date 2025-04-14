import { createApi } from '@reduxjs/toolkit/query/react';

import { axiosBaseQuery } from '@/lib/axios-base-query';
import { BaseParams, GetAllType, PaginationResponse, TId } from '@/types';
import { Card, CardsCreateReq, CardsUpdateReq } from '@/types/cards';

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
    getCards: builder.query<PaginationResponse<Card>, BaseParams>({
      query: () => ({
        url: '/cards',
        method: 'GET',
      }),
    }),
    getCard: builder.query<Card, TId>({
      query: (id) => ({
        url: `/cards/${id}`,
        method: 'GET',
      }),
    }),
    createCard: builder.mutation<Card, CardsCreateReq>({
      query: (data) => ({
        url: '/cards',
        method: 'POST',
        data,
      }),
    }),
    updateCard: builder.mutation<Card, CardsUpdateReq>({
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
