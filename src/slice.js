/* eslint-disable no-console */
import { createSlice } from '@reduxjs/toolkit';

import { authService } from './FirebaseInfo';

const initialState = {
  regions: [],
  isLoggedIn: '',
  loginFields: {
    email: '',
    password: '',
  },
};

const reducers = {
  checkUserState(state, { payload: isLoggedIn }) {
    return {
      ...state,
      isLoggedIn,
      idid: isLoggedIn,
    };
  },
  changeLoginField(state, { payload: { name, value } }) {
    return {
      ...state,
      loginFields: {
        ...state.loginFields,
        [name]: value,
      },
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
  changeLoginField,
  setRegions,
  setCategories,
} = actions;

export function createUserId() {
  return async (dispatch, getState) => {
    const { loginFields: { email, password } } = getState();
    try {
      const data = await authService.createUserWithEmailAndPassword(email, password);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
}

export function signInUserId() {
  return async (getState) => {
    const { loginFields: { email, password } } = getState();

    try {
      const data = await authService.signInWithEmailAndPassword(email, password);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
}

export default reducer;
