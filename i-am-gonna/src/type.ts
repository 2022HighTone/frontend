export type error = {
  status: number;
  message: string;
  type: string;
};

export interface responseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}

export type searchResponse = {
  id: number;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  is_default: boolean;
};

export type signupRequest = {
  username: string;
  email: string;
  password: string;
};

export type loginRequest = {
  email: string;
  password: string;
};
