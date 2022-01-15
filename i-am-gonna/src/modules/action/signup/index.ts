import { createAction } from 'typesafe-actions';
import { error } from '../../../type';

export const NAME = 'SIGNUP/NAME' as const;
export const EMAIL = 'SIGNUP/EMAIL' as const;
export const PASSWORD = 'SIGNUP/PASSWORD' as const;
export const SIGNUP = 'SIGNUP/SIGNUP' as const;
export const SIGNUP_SUCCESS = 'SIGNUP/SIGNUP_SUCCESS' as const;
export const SIGNUP_FAILURE = 'SIGNUP/SIGNUP_FAILURE' as const;

export const name = createAction(NAME)<string>();
export const email = createAction(EMAIL)<string>();
export const password = createAction(PASSWORD)<string>();
export const signup = createAction(SIGNUP)();
export const signupSuccess = createAction(SIGNUP_SUCCESS)();
export const signupFailure = createAction(SIGNUP_FAILURE)<error>();

export type signupActionType =
  | ReturnType<typeof name>
  | ReturnType<typeof email>
  | ReturnType<typeof password>
  | ReturnType<typeof signup>
  | ReturnType<typeof signupSuccess>
  | ReturnType<typeof signupFailure>;
