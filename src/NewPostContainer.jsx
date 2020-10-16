import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import {
  changeNewPostText,
  postOnFirebase,
  attachNewPostImage,
  uploadImageOnFirebase,
} from './slice';

import NewPostPage from './NewPostPage';

export default function NewPostContainer() {
  const { newPostText, newPostImage } = useSelector((state) => ({
    newPostText: state.newPostText,
    newPostImage: state.newPostImage,
  }));

  const dispatch = useDispatch();

  function handleChange(value) {
    dispatch(changeNewPostText(value));
  }

  function handleAttach(value) {
    dispatch(attachNewPostImage(value));

    if (value) {
      dispatch(uploadImageOnFirebase());
    }
  }

  function handleSubmit() {
    dispatch(postOnFirebase());
  }

  return (
    <NewPostPage
      newPostText={newPostText}
      onChange={handleChange}
      newPostImage={newPostImage}
      onAttach={handleAttach}
      onSubmit={handleSubmit}
    />
  );
}
