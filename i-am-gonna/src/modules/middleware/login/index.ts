import { call, put, select, takeLatest } from 'redux-saga/effects';
import { reducerType } from '../../reducer';
import { ILoginState } from '../../reducer/login';
import { login } from '../../../util/api/login';
import { LOGIN } from '../../action/login';
import { responseGenerator } from '../../../type';

const getStateFunc = (state: reducerType): reducerType['login'] => state.login;

const loginSaveSaga = function* () {
  const ACTION = 'LOGIN/LOGIN';
  const state: ILoginState = yield select(getStateFunc);
  try {
    const response: responseGenerator = yield call(login, {
      email: state.id,
      password: state.password,
    });
    yield put({
      type: `${ACTION}_SUCCESS`,
      payload: response ? response.data : null,
    });
  } catch (error: any) {
    yield put({
      type: `${ACTION}_FAILURE`,
      payload: { ...error.response?.data, type: ACTION },
    });
  }
};

function* loginSaga() {
  yield takeLatest(LOGIN, loginSaveSaga);
}

export default loginSaga;
