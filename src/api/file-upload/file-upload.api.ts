import { createApi } from '@reduxjs/toolkit/query/react';

import { axiosBaseQuery } from '@/lib/axios-base-query';

export const fileUploadApi = createApi({
  reducerPath: 'fileUploadApi',
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
    uploadFile: builder.mutation<string, FormData>({
      query: (formData) => ({
        url: '/file-upload',
        method: 'POST',
        data: formData,
      }),
    }),
  }),
});

export const { useUploadFileMutation } = fileUploadApi;
