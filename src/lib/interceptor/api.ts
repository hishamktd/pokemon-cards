import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import { headers } from 'next/headers';

import { LOCAL_STORAGE_KEYS } from '@/constants/common/store-keys';
import { clientCookies as cookies } from '@/lib/cookies';
import { Any } from '@/types';

const { TOKEN } = LOCAL_STORAGE_KEYS;

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 5000,
});

api.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    const headersList = await headers();
    const token = headersList.get('cookie')?.match(`${TOKEN}=([^;]+)`)?.[1];

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
      cookies.set(TOKEN, token);
    }
    return response;
  },
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      cookies.remove(TOKEN);
      window.location.href = '/login';
    }
    return Promise.reject(error);
  },
);
