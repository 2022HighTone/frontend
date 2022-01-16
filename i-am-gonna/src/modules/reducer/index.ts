import { combineReducers } from 'redux';
import LoginReducer from './login';
import MapReducer from './map';
import SearchReducer from './search';
import SignupReducer from './signup';

const rootReducer = combineReducers({
  login: LoginReducer,
  signup: SignupReducer,
  search: SearchReducer,
  map: MapReducer,
});

export type reducerType = ReturnType<typeof rootReducer>;
export default rootReducer;
