import { call, put, select, takeLatest } from 'redux-saga/effects';
import { responseGenerator } from '../../../type';
import { GETUSERINFO } from '../../action/map';
import { reducerType } from '../../reducer';
import { IMapState } from '../../reducer/map';
import { getProfile } from '../../../util/api/map';

const getUserInfoSaga = function* () {
  const ACTION = 'MAP/GETUSERINFO';
  const token = localStorage.getItem('access_token');
  try {
    const response: responseGenerator = yield call(getProfile, token);
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

function* mapSaga() {
  yield takeLatest(GETUSERINFO, getUserInfoSaga);
}

export default mapSaga;
