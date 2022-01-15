import { all } from 'redux-saga/effects';
import loginSaga from './login';
import signupSaga from './signup';

export default function* rootSata() {
  yield all([signupSaga(), loginSaga()]);
}
