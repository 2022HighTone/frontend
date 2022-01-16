import { createAction } from 'typesafe-actions';
import { error, searchResponse } from '../../../type';

export const SCHOOLINPUT = 'SEARCH/SCHOOLINPUT' as const;
export const SCHOOL = 'SEARCH/SCHOOL' as const;
export const SCHOOL_SUCCESS = 'SEARCH/SCHOOL_SUCCESS' as const;
export const SCHOOL_FAILURE = 'SEARCH/SCHOOL_FAILURE' as const;
export const DEFAULT_SCHOOL = 'SEARCH/DEFAULT_SCHOOL' as const;
export const DEFAULT_SCHOOL_SUCCESS = 'SEARCH/DEFAULT_SCHOOL_SUCCESS' as const;
export const DEFAULT_SCHOOL_FAILURE = 'SEARCH/DEFAULT_SCHOOL_FAILURE' as const;

export const schoolInput = createAction(SCHOOLINPUT)<string>();
export const school = createAction(SCHOOL)();
export const schoolSuccess = createAction(SCHOOL_SUCCESS)<searchResponse>();
export const schoolFailure = createAction(SCHOOL_FAILURE)<error>();
export const defaultSchool = createAction(DEFAULT_SCHOOL)();
export const defaultSchoolSuccess = createAction(DEFAULT_SCHOOL_SUCCESS)<searchResponse>();
export const defaultSchoolFailure = createAction(DEFAULT_SCHOOL_FAILURE)<error>();

export type searchActionType =
  | ReturnType<typeof schoolInput>
  | ReturnType<typeof school>
  | ReturnType<typeof schoolSuccess>
  | ReturnType<typeof schoolFailure>
  | ReturnType<typeof defaultSchool>
  | ReturnType<typeof defaultSchoolSuccess>
  | ReturnType<typeof defaultSchoolFailure>;
