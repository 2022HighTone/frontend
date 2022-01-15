import { signupRequest } from '../../../type';
import { getRequest } from '../default';

export const signup = async (signupRequest: signupRequest) => {
  try {
    const request = getRequest();
    const { data } = await request.post('/api/auth/sign-up/', signupRequest);
    localStorage.setItem('access_token', data.token);
    return data;
  } catch (error) {
    throw error;
  }
};
