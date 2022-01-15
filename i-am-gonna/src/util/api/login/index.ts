import { loginRequest } from '../../../type';
import { getRequest } from '../default';

export const login = async (loginRequest: loginRequest) => {
  try {
    const request = getRequest();
    const { data } = await request.post('/api/auth/sign-in/', loginRequest);
    localStorage.setItem('access_token', data.token);
    return data;
  } catch (error) {
    throw error;
  }
};
