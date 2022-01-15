import { createReducer } from 'typesafe-actions';
import { error } from '../../../type';
import {
  NAME,
  EMAIL,
  PASSWORD,
  SIGNUP,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  signupActionType,
} from '../../action/signup';

export interface ISignupState {
  name: string;
  email: string;
  password: string;
  error: error;
  isSuccessSignup: boolean | undefined;
}

const initState: ISignupState = {
  name: '',
  email: '',
  password: '',
  error: {
    type: '',
    status: 0,
    message: '',
  },
  isSuccessSignup: undefined,
};

const SignupReducer = createReducer<ISignupState, signupActionType>(initState, {
  [NAME]: (state, action) => ({
    ...state,
    name: action.payload,
  }),
  [EMAIL]: (state, action) => ({
    ...state,
    email: action.payload,
  }),
  [PASSWORD]: (state, action) => ({
    ...state,
    password: action.payload,
  }),
  [SIGNUP]: state => ({
    ...state,
    isSuccessSignup: undefined,
  }),
  [SIGNUP_SUCCESS]: state => ({
    ...state,
    isSuccessSignup: true,
  }),
  [SIGNUP_FAILURE]: (state, action) => ({
    ...state,
    error: action.payload,
    isSuccessSignup: false,
  }),
});

export default SignupReducer;
