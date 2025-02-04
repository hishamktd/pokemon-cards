'use server';

import { LOCAL_STORAGE_KEYS } from '@/constants/common/store-keys';
import { serverCookies } from '@/lib/server-cookies';

const { TOKEN } = LOCAL_STORAGE_KEYS;

export const logout = async (): Promise<void> => {
  await serverCookies.remove(TOKEN);
};
