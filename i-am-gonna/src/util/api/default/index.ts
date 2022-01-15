import axios from 'axios';

export const getRequest = (token?: string) => {
  const request = axios.create({
    timeout: 10000,
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
      Authorization: token ? `Bearer ${token}` : '',
    },
  });
  return request;
};
