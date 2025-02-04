import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import { headers } from 'next/headers';

import { setCookie, removeCookie } from '@/lib/cookies';
import { Any } from '@/types';

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 5000,
});

api.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    const headersList = await headers();
    const token = headersList
      .get('cookie')
      ?.match(/session_token=([^;]+)/)?.[1];

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error: Any) =>
    Promise.reject(error instanceof Error ? error : new Error(String(error))),
);

api.interceptors.response.use(
  (response: AxiosResponse) => {
    const token = response.headers['authorization']?.split(' ')[1];
    if (token) {
      setCookie('session_token', token);
    }
    return response;
  },
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      removeCookie('session_token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  },
);
