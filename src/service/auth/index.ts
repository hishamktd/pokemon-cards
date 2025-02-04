import { api } from '@/lib/interceptor/api';

interface ValidateResponse {
  success: boolean;
}

export const validateSession = async (): Promise<boolean> => {
  const { data } = await api.get<ValidateResponse>('/auth/validate');
  return data.success;
};
