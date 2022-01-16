import { getRequest } from '../default';

export const getDefaultSchool = async (accessToken: string | null) => {
  try {
    const request = getRequest(accessToken ? accessToken : '');
    return await request.get('/api/school/default-school/');
  } catch (error) {
    throw error;
  }
};

export const searchSchool = async (school: string) => {
  const token = localStorage.getItem('access_token');
  try {
    const request = getRequest();
    const { data } = await request.get('/api/school/search-school/?name=' + school);
    try {
      const request = getRequest(token ? token : '');
      await request.post('/api/auth/default-school-setting/', {
        name: data.name,
        address: data.address,
      });
    } catch (error) {
      throw error;
    }
    try {
      const request = getRequest();
      return await request.get(
        '/api/school/result-school/?name=' + data.name + '&address=' + data.address,
      );
    } catch (error) {
      throw error;
    }
  } catch (error) {
    throw error;
  }
};
