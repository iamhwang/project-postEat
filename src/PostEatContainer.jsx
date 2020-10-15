/* eslint-disable react/prop-types */
import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import {
  deletePostEatOnFirebase,
} from './slice';

import PostEatPage from './PostEatPage';

export default function PostEatContainer() {
  const { postEats, userUid } = useSelector((state) => ({
    postEats: state.postEats,
    userUid: state.isLoggedIn.userUid,
  }));

  const dispatch = useDispatch();

  function handleDelete(value) {
    dispatch(deletePostEatOnFirebase(value));
  }

  return (
    <PostEatPage
      postEats={postEats}
      userUid={userUid}
      onClick={handleDelete}
    />
  );
}
