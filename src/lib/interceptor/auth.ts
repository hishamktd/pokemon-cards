// utils/axios.ts
import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import { cookies } from 'next/headers';

import { Any } from '@/types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const authApi = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

authApi.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    const cookieStore = await cookies();
    const token = cookieStore.get('session_token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error: Any) => Promise.reject(error),
);

authApi.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    if (error.response && error.response.status === 401) {
      window.location.href = '/login';
    }
    return Promise.reject(error);
  },
);
