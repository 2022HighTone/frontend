import { combineReducers } from 'redux';
import LoginReducer from './login';
import SignupReducer from './signup';

const rootReducer = combineReducers({
  login: LoginReducer,
  signup: SignupReducer,
});

export type reducerType = ReturnType<typeof rootReducer>;
export default rootReducer;
