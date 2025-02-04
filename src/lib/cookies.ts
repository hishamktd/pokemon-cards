import Cookies from 'js-cookie';
import { cookies as nextCookies } from 'next/headers';

// Client-side cookie operations
export const clientCookies = {
  set: (name: string, value: string) => {
    Cookies.set(name, value, {
      secure: true,
      sameSite: 'strict',
    });
  },

  get: (name: string) => {
    return Cookies.get(name);
  },

  remove: (name: string) => {
    Cookies.remove(name);
  },
};

// Server-side cookie operations
export const serverCookies = {
  set: async (name: string, value: string) => {
    const cookieStore = await nextCookies();
    cookieStore.set({
      name,
      value,
      secure: true,
      sameSite: 'strict',
      httpOnly: true,
    });
  },

  get: async (name: string) => {
    const cookieStore = await nextCookies();
    return cookieStore.get(name)?.value;
  },

  remove: async (name: string) => {
    const cookieStore = await nextCookies();
    cookieStore.set({
      name,
      value: '',
      expires: new Date(0),
    });
  },
};

// Use this to determine if we're on server or client
export const isServer = typeof window === 'undefined';

// Generic cookie operations that work in both environments
export const cookies = isServer ? serverCookies : clientCookies;
