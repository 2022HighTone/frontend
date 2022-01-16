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

export type menusArray = {
  name: string;
  price: number;
};

export type storesArray = {
  id: number;
  latitude: number;
  longitude: number;
  category: number;
  category_name: string;
  address: string;
  distance: number;
  distanceName: string;
  menus: Array<menusArray>;
  name: string;
};

export type searchResponse = {
  id: number;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  is_default: boolean;
  stores: Array<storesArray>;
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

export type getUserType = {
  username: string;
  email: string;
};
