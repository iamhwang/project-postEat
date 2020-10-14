/* eslint-disable no-console */
import { createSlice } from '@reduxjs/toolkit';

import { authService, dbService } from './FirebaseInfo';

const initialState = {
  isLoggedIn: {
    userEmail: '',
    userUid: '',
  },
  loginFields: {
    email: '',
    password: '',
  },
  userObj: '',
  postingText: '',
  postEats: [],
};

const reducers = {
  checkUserState(state, { payload: loginFields }) {
    return {
      ...state,
      isLoggedIn: {
        ...state.isLoggedIn,
        userEmail: loginFields.email,
        userUid: loginFields.uid,
      },
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
  setUserObj(state, { payload: userObj }) {
    return {
      ...state,
      userObj,
    };
  },
  changePostEat(state, { payload: postingText }) {
    return {
      ...state,
      postingText,
    };
  },
  setPostEats(state, { payload: posted }) {
    return {
      ...state,
      postEats: [
        {
          postId: posted.postId,
          postEat: posted.postEat,
          createAt: posted.createAt,
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
    const { postingText, isLoggedIn: { userUid } } = getState();
    await dbService.collection('postEat').add({
      postEat: postingText,
      createAt: Date.now(),
      creatorId: userUid,
    });
    dispatch(changePostEat(''));
  };
}

export function getPostEatOnFirebase() {
  return async (dispatch) => {
    const dbPostEats = await dbService.collection('postEat').get();
    dbPostEats.forEach((document) => {
      const postId = document.id;
      const { postEat, createAt } = document.data();
      dispatch(setPostEats({ postId, postEat, createAt }));
    });
  };
}

export default reducer;
