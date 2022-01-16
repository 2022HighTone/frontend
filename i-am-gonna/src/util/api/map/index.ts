import { getRequest } from '../default';

export const getProfile = async (accessToken: string | null) => {
  try {
    const request = getRequest(accessToken ? accessToken : '');
    return await request.get('/api/auth/profile');
  } catch (error) {
    throw error;
  }
};
