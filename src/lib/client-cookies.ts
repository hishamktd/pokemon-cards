import Cookies from 'js-cookie';

export const setClientCookie = (name: string, value: string) => {
  Cookies.set(name, value, { 
    secure: true,
    sameSite: 'strict'
  });
};

export const removeClientCookie = (name: string) => {
  Cookies.remove(name);
}; 