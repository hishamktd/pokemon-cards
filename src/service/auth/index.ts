import { authApi } from '@/lib/interceptor/auth';
export const validateSession = async () => {
  try {
    const { data } = await authApi.get('/api/auth/validate');
    return data;
  } catch (error) {
    console.error('Error validating session:', error);
    throw error;
  }
};
