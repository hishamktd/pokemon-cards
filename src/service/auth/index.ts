import axios from 'axios';

import { LOCAL_STORAGE_KEYS } from '@/constants/common/store-keys';
import { serverCookies } from '@/lib/server-cookies';

const { TOKEN } = LOCAL_STORAGE_KEYS;

interface ValidateResponse {
  success: boolean;
}

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export const validateSession = async (token: string): Promise<boolean> => {
  const { data } = await axios.get<ValidateResponse>(
    `${baseUrl}/auth/validate`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return data.success;
};

export const logout = async (): Promise<void> => {
  await serverCookies.remove(TOKEN);
  await axios.post(`${baseUrl}/auth/logout`);
};
