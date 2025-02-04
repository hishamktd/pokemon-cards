export type LoginParams = {
  email: string;
  password: string;
};

export type User = {
  id: string;
  email: string;
  password: string;
};

export type AuthResponse = {
  token: string;
  user: User;
};