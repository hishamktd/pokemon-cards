import { cookies } from 'next/headers';

export const serverCookies = {
  set: async (name: string, value: string) => {
    const cookieStore = await cookies();
    cookieStore.set({
      name,
      value,
      secure: true,
      sameSite: 'strict',
      httpOnly: true,
    });
  },

  get: async (name: string) => {
    const cookieStore = await cookies();
    return cookieStore.get(name)?.value;
  },

  remove: async (name: string) => {
    const cookieStore = await cookies();
    cookieStore.set({
      name,
      value: '',
      expires: new Date(0),
    });
  },
};
