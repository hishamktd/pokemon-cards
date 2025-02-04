import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';

import { LOCAL_STORAGE_KEYS } from '@/constants/common/store-keys';
import clientCookies from '@/lib/cookies';
import { Any } from '@/types';

const { TOKEN } = LOCAL_STORAGE_KEYS;

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 5000,
});

api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = clientCookies.get(TOKEN);
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
      clientCookies.set(TOKEN, token);
    }
    return response;
  },
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      clientCookies.remove(TOKEN);
      window.location.href = '/login';
    }
    return Promise.reject(error);
  },
);
