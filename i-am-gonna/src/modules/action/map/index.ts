import { createAction } from 'typesafe-actions';
import { error, getUserType } from '../../../type';

export const GETUSERINFO = 'MAP/GETUSERINFO' as const;
export const GETUSERINFO_FAILURE = 'MAP/GETUSERINFO_FAILURE' as const;
export const GETUSERINFO_SUCCESS = 'MAP/GETUSERINFO_SUCCESS' as const;

export const getUserInfo = createAction(GETUSERINFO)();
export const getUserInfoSuccess = createAction(GETUSERINFO_SUCCESS)<getUserType>();
export const getUserInfoFailure = createAction(GETUSERINFO_FAILURE)<error>();

export type mapActionType =
  | ReturnType<typeof getUserInfo>
  | ReturnType<typeof getUserInfoSuccess>
  | ReturnType<typeof getUserInfoFailure>;
