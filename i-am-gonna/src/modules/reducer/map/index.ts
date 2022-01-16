import { createReducer } from 'typesafe-actions';
import { error } from '../../../type';
import { GETUSERINFO_FAILURE, GETUSERINFO_SUCCESS, mapActionType } from '../../action/map';

export interface IMapState {
  name: string;
  email: string;
  error: error;
}

const initState: IMapState = {
  name: '',
  email: '',
  error: {
    status: 0,
    message: '',
    type: '',
  },
};

const MapReducer = createReducer<IMapState, mapActionType>(initState, {
  [GETUSERINFO_SUCCESS]: (state, action) => ({
    ...state,
    name: action.payload.username,
    email: action.payload.email,
  }),
  [GETUSERINFO_FAILURE]: (state, action) => ({
    ...state,
    error: action.payload,
  }),
});

export default MapReducer;
