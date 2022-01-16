import { all } from 'redux-saga/effects';
import loginSaga from './login';
import mapSaga from './map';
import searchSaga from './search';
import signupSaga from './signup';

export default function* rootSata() {
  yield all([signupSaga(), loginSaga(), searchSaga(), mapSaga()]);
}
