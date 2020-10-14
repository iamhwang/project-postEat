/* eslint-disable no-console */
import { createSlice } from '@reduxjs/toolkit';

import { authService, dbService } from './FirebaseInfo';

const initialState = {
  isLoggedIn: '',
  loginFields: {
    email: '',
    password: '',
  },
  postingText: '',
  postEats: [
    {
      postEat: '',
      createAt: '',
    },
  ],
};

const reducers = {
  checkUserState(state, { payload: isLoggedIn }) {
    return {
      ...state,
      isLoggedIn,
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
  logoutUserId(state) {
    return {
      ...state,
      isLoggedIn: '',
    };
  },
  changePostEat(state, { payload: postingText }) {
    return {
      ...state,
      postingText,
    };
  },
  setPostEats(state, { payload: fbData }) {
    console.log("1");
    console.log(fbData);
    return {
      ...state,
      postEats: [
        {
          postEat: fbData.postEat,
          createAt: fbData.createAt,
        },
        ...state.postEats,
      ],
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
  logoutUserId,
  changePostEat,
  setPostEats,
} = actions;

export function createUserId() {
  return async (dispatch, getState) => {
    const { loginFields: { email, password } } = getState();

    try {
      await authService.createUserWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error);
    }
  };
}

export function loginUserId() {
  return async (dispatch, getState) => {
    const { loginFields: { email, password } } = getState();

    try {
      await authService.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error);
    }
  };
}

export function postEatOnFirebase() {
  return async (dispatch, getState) => {
    const { postingText } = getState();
    await dbService.collection('postEat').add({
      postEat: postingText,
      createAt: Date.now(),
    });
    dispatch(changePostEat(''));
  };
}

export function getPostEatOnFirebase() {
  return async (dispatch) => {
    const dbPostEats = await dbService.collection('postEat').get();
    dbPostEats.forEach((document) => dispatch(setPostEats(document.data())));
  };
}

export default reducer;
