import Cookies from 'js-cookie';

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

export default clientCookies;
