import { createReducer } from 'typesafe-actions';
import { error } from '../../../type';
import {
  ID,
  PASSWORD,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  loginActionType,
} from '../../action/login';

export interface ILoginState {
  id: string;
  password: string;
  error: error;
  isSuccessLogin: boolean | undefined;
}

const initState: ILoginState = {
  id: '',
  password: '',
  error: {
    status: 0,
    message: '',
    type: '',
  },
  isSuccessLogin: undefined,
};

const LoginReducer = createReducer<ILoginState, loginActionType>(initState, {
  [ID]: (state, action) => ({
    ...state,
    id: action.payload,
  }),
  [PASSWORD]: (state, action) => ({
    ...state,
    password: action.payload,
  }),
  [LOGIN]: state => ({
    ...state,
    isSuccessLogin: undefined,
  }),
  [LOGIN_SUCCESS]: state => ({
    ...state,
    isSuccessLogin: true,
  }),
  [LOGIN_FAILURE]: (state, action) => ({
    ...state,
    isSuccessLogin: false,
    error: action.payload,
  }),
});

export default LoginReducer;
