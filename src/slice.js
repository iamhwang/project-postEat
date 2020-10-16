/* eslint-disable no-console */
import { createSlice } from '@reduxjs/toolkit';

import { v4 as uuidv4 } from 'uuid';

import { authService, dbService, storeageService } from './FirebaseInfo';

const initialState = {
  loginFields: {
    email: '',
    password: '',
  },
  LoginErrorMessage: '',
  isLoggedIn: {
    userEmail: '',
    userUid: '',
    userDisplayName: '',
    userPhotoUrl: '',
  },

  posts: [],

  newPostText: '',
  newPostImage: '',
  newPostImageUrl: '',
  editPostText: '',
};

const reducers = {
  checkUserState(state, { payload: userInf }) {
    return {
      ...state,
      isLoggedIn: {
        ...state.isLoggedIn,
        userEmail: userInf.email,
        userUid: userInf.uid,
        userDisplayName: userInf.displayName,
        userPhotoUrl: userInf.photoURL,
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
  showAuthError(state, { payload: LoginErrorMessage }) {
    return {
      ...state,
      LoginErrorMessage,
    };
  },
  setPostsToService(state, { payload: posts }) {
    return {
      ...state,
      posts,
    };
  },
  changeNewPostText(state, { payload: newPostText }) {
    return {
      ...state,
      newPostText,
    };
  },
  attachNewPostImage(state, { payload: newPostImage }) {
    return {
      ...state,
      newPostImage,
    };
  },
  attachNewPostImageUrl(state, { payload: newPostImageUrl }) {
    return {
      ...state,
      newPostImageUrl,
    };
  },
  editPost(state, { payload: editPostText }) {
    return {
      ...state,
      editPostText,
    };
  },
  resetEditPost(state) {
    return {
      ...state,
      editPostText: '',
    };
  },
  editProfileDisplayName(state, { payload: profileDisplayName }) {
    return {
      ...state,
      isLoggedIn: {
        ...state.isLoggedIn,
        userDisplayName: profileDisplayName,
      },
    };
  },
  editProfileInformation(state, { payload: profileInformation }) {
    return {
      ...state,
      isLoggedIn: {
        ...state.isLoggedIn,
        userDisplayName: profileInformation.userDisplayName,
        userPhotoUrl: profileInformation.userPhotoUrl,
      },
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
  showAuthError,
  changeNewPostText,
  setPostsToService,
  editPost,
  resetEditPost,
  attachNewPostImage,
  attachNewPostImageUrl,
  editProfileDisplayName,
  editProfileInformation,
} = actions;

export function createUserId() {
  return async (dispatch, getState) => {
    const { loginFields: { email, password } } = getState();

    try {
      await authService.createUserWithEmailAndPassword(email, password);
    } catch (error) {
      dispatch(showAuthError(error.message));
    }
  };
}

export function loginUserId() {
  return async (dispatch, getState) => {
    const { loginFields: { email, password } } = getState();

    try {
      await authService.signInWithEmailAndPassword(email, password);
    } catch (error) {
      dispatch(showAuthError(error.message));
    }
  };
}

export function getPostsFromFirebase() {
  return async (dispatch) => {
    await dbService.collection('PostEat').onSnapshot((snapshot) => {
      const POSTS = snapshot.docs.map((doc) => ({
        POST_ID: doc.id,
        ...doc.data(),
      }));
      dispatch(setPostsToService(POSTS));
    });
  };
}

export function postOnFirebase() {
  return async (dispatch, getState) => {
    const { newPostText, isLoggedIn: { userUid }, newPostImageUrl } = getState();
    await dbService.collection('PostEat').add({
      POST_TEXT: newPostText,
      POST_IMAGE_URL: newPostImageUrl,
      CREATE_DATE: Date.now(),
      CREATE_UID: userUid,
    });
    dispatch(changeNewPostText(''));
  };
}

export function uploadImageOnFirebase() {
  return async (dispatch, getState) => {
    const { isLoggedIn: { userUid }, newPostImage } = getState();

    const fileRef = storeageService.ref().child(`${userUid}/${uuidv4()}`);
    const response = await fileRef.putString(newPostImage, 'data_url');
    const newPostImageUrl = await response.ref.getDownloadURL();
    dispatch(attachNewPostImageUrl(newPostImageUrl));
  };
}

export function updatePostOnFirebase(postObjId) {
  return async (dispatch, getState) => {
    const { editPostText } = getState();

    await dbService.doc(`PostEat/${postObjId}`).update({
      POST_TEXT: editPostText,
    });
    dispatch(resetEditPost());
  };
}

export function deletePostOnFirebase(postObjId, postObjUrl) {
  return async (dispatch) => {
    await dbService.doc(`PostEat/${postObjId}`).delete();
    await storeageService.refFromURL(postObjUrl).delete();
    dispatch(attachNewPostImage(''));
  };
}

export function changeUserDisplayName() {
  return async (dispatch, getState) => {
    const { isLoggedIn: { userDisplayName } } = getState();

    authService.onAuthStateChanged(async (user) => {
      await user.updateProfile({
        displayName: userDisplayName,
      });
    });
  };
}

export default reducer;
