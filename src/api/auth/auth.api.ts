import { createApi } from '@reduxjs/toolkit/query/react';

import { axiosBaseQuery } from '@/lib/axios-base-query';
import { AuthResponse, LoginParams } from '@/types/auth';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
    login: builder.mutation<AuthResponse, LoginParams>({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        data: credentials,
      }),
    }),
    register: builder.mutation<AuthResponse, LoginParams>({
      query: (credentials) => ({
        url: '/auth/register',
        method: 'POST',
        data: credentials,
      }),
    }),
    validateToken: builder.query<AuthResponse, void>({
      query: () => ({
        url: '/auth/validate',
        method: 'GET',
      }),
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        url: '/auth/logout',
        method: 'POST',
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useValidateTokenQuery,
  useLogoutMutation,
} = authApi;
