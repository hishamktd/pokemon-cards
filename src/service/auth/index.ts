import axios from 'axios';

interface ValidateResponse {
  success: boolean;
}

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export const validateSession = async (token: string): Promise<boolean> => {
  const { data } = await axios.get<ValidateResponse>(
    `${baseUrl}/auth/validate`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return data.success;
};
