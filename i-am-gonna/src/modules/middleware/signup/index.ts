import { call, put, select, takeLatest } from 'redux-saga/effects';
import { reducerType } from '../../reducer';
import { signup } from '../../../util/api/signup';
import { ISignupState } from '../../reducer/signup';
import { SIGNUP } from '../../action/signup';
import { responseGenerator } from '../../../type';

const getStateFunc = (state: reducerType): reducerType['signup'] => state.signup;

const signupSaveSaga = function* () {
  const ACTION = 'SIGNUP/SIGNUP';
  const state: ISignupState = yield select(getStateFunc);
  try {
    const response: responseGenerator = yield call(signup, {
      username: state.name,
      email: state.email,
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

function* signupSaga() {
  yield takeLatest(SIGNUP, signupSaveSaga);
}

export default signupSaga;
