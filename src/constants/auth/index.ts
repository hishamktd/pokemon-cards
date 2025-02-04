import { AuthResponse, User } from '@/types/auth';

export const defaultUser: User = {
  id: '',
  email: '',
  password: '',
};

export const defaultAuthResponse: AuthResponse = {
  token: '',
  user: defaultUser,
};
