import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import {
  changePostEat,
  postEatOnFirebase,
} from './slice';

import PostPage from './PostPage';

export default function PostContainer() {
  const dispatch = useDispatch();

  const { postingText } = useSelector((state) => ({
    postingText: state.postingText,
  }));

  function handleChange(value) {
    dispatch(changePostEat(value));
  }

  function handleSubmit() {
    dispatch(postEatOnFirebase());
  }

  return (
    <PostPage
      postingText={postingText}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
}
