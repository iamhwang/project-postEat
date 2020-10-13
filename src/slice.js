import { createSlice } from '@reduxjs/toolkit';

import {
  fetchRegions,
  fetchCategories,
} from './services/api';

const initialState = {
  regions: [],
  isLoggedIn: '',
  idid: '',
};

const reducers = {
  checkUserState(state, { payload: isLoggedIn }) {
    return {
      ...state,
      isLoggedIn,
      idid: isLoggedIn,
    };
  },
  setRegions(state, { payload: regions }) {
    return {
      ...state,
      regions,
    };
  },
  setCategories(state, { payload: categories }) {
    return {
      ...state,
      categories,
    };
  },
};

const { actions, reducer } = createSlice({
  name: 'application',
  initialState,
  reducers,
});

export const {
  checkUserState,
  setRegions,
  setCategories,
} = actions;

export function loadInitialData() {
  return async (dispatch) => {
    const regions = await fetchRegions();
    dispatch(setRegions(regions));

    const categories = await fetchCategories();
    dispatch(setCategories(categories));
  };
}

export default reducer;
