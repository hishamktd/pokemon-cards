import { authApi } from '@/lib/interceptor/auth';
export const validateSession = async () => {
  try {
    console.log('Validating session...');

    const { data } = await authApi.get('/api/auth/validate');
    console.log('Session validated:', data);

    return data;
  } catch (error) {
    console.error('Error validating session:', error);
    throw error;
  }
};
