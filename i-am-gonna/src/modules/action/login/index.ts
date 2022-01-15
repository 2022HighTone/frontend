import { createAction } from 'typesafe-actions';
import { error } from '../../../type';

export const ID = 'LOGIN/ID' as const;
export const PASSWORD = 'LOGIN/PASSWORD' as const;
export const LOGIN = 'LOGIN/LOGIN' as const;
export const LOGIN_SUCCESS = 'LOGIN/LOGIN_SUCCESS' as const;
export const LOGIN_FAILURE = 'LOGIN/LOGIN_FAILURE' as const;

export const id = createAction(ID)<string>();
export const password = createAction(PASSWORD)<string>();
export const login = createAction(LOGIN)<{ token: string }>();
export const loginSuccess = createAction(LOGIN_SUCCESS)();
export const loginFailure = createAction(LOGIN_FAILURE)<error>();

export type loginActionType =
  | ReturnType<typeof id>
  | ReturnType<typeof password>
  | ReturnType<typeof login>
  | ReturnType<typeof loginSuccess>
  | ReturnType<typeof loginFailure>;
