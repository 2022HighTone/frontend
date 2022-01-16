import { createReducer } from 'typesafe-actions';
import { error, storesArray } from '../../../type';
import {
  DEFAULT_SCHOOL_FAILURE,
  DEFAULT_SCHOOL_SUCCESS,
  SCHOOLINPUT,
  SCHOOL_FAILURE,
  SCHOOL_SUCCESS,
  searchActionType,
} from '../../action/search';

export interface ISearchState {
  searchInput: string;
  id: number;
  schoolName: string;
  schoolAddress: string;
  schoolLat: number;
  schoolLng: number;
  isDefault: boolean;
  stores: Array<storesArray>;
  error: error;
}

const initState: ISearchState = {
  searchInput: '',
  id: 0,
  schoolName: '',
  schoolAddress: '',
  schoolLat: 0,
  schoolLng: 0,
  isDefault: true,
  stores: [],
  error: {
    status: 0,
    type: '',
    message: '',
  },
};

const SearchReducer = createReducer<ISearchState, searchActionType>(initState, {
  [SCHOOLINPUT]: (state, action) => ({
    ...state,
    searchInput: action.payload,
  }),
  [SCHOOL_SUCCESS]: (state, action) => ({
    ...state,
    id: action.payload.id,
    schoolName: action.payload.name,
    schoolAddress: action.payload.address,
    schoolLat: action.payload.latitude,
    schoolLng: action.payload.longitude,
    isDefault: action.payload.is_default,
    stores: action.payload.stores,
  }),
  [SCHOOL_FAILURE]: (state, action) => ({
    ...state,
    error: action.payload,
  }),
  [DEFAULT_SCHOOL_SUCCESS]: (state, action) => ({
    ...state,
    id: action.payload.id,
    schoolName: action.payload.name,
    schoolAddress: action.payload.address,
    schoolLat: action.payload.latitude,
    schoolLng: action.payload.longitude,
    isDefault: action.payload.is_default,
    stores: action.payload.stores,
  }),
  [DEFAULT_SCHOOL_FAILURE]: (state, action) => ({
    ...state,
    error: action.payload,
  }),
});

export default SearchReducer;
