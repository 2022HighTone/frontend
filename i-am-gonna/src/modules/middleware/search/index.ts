import { call, put, select, takeLatest } from 'redux-saga/effects';
import { responseGenerator } from '../../../type';
import { reducerType } from '../../reducer';
import { ISearchState } from '../../reducer/search';
import { getDefaultSchool, searchSchool } from '../../../util/api/search';
import { DEFAULT_SCHOOL, SCHOOL } from '../../action/search';

const getStateFunc = (state: reducerType): reducerType['search'] => state.search;

const searchSchoolSaga = function* () {
  const ACTION = 'SEARCH/SCHOOL';
  const state: ISearchState = yield select(getStateFunc);
  try {
    const response: responseGenerator = yield call(searchSchool, state.searchInput);
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

const defaultSchoolSaga = function* () {
  const ACTION = 'SEARCH/DEFAULT_SCHOOL';
  const accessToken = localStorage.getItem('access_token');
  try {
    const response: responseGenerator = yield call(getDefaultSchool, accessToken);
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

function* searchSaga() {
  yield takeLatest(SCHOOL, searchSchoolSaga);
  yield takeLatest(DEFAULT_SCHOOL, defaultSchoolSaga);
}

export default searchSaga;
