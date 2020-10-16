/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import {
  deletePostOnFirebase,
  editPost,
  updatePostOnFirebase,
} from './slice';

import PostPage from './PostPage';

export default function PostContainer({
  postId, createUid, postText, postImageUrl,
}) {
  const [editState, onEdit] = useState(false);

  const { userUid, editPostText } = useSelector((state) => ({
    userUid: state.isLoggedIn.userUid,
    editPostText: state.editPostText,
  }));

  const dispatch = useDispatch();

  function handleDelete(id, url) {
    dispatch(deletePostOnFirebase(id, url));
  }

  function handleChange(value) {
    dispatch(editPost(value));
  }

  function handleEdit() {
    onEdit((prev) => !prev);
  }

  function handleUpdate(value) {
    dispatch(updatePostOnFirebase(value));
    handleEdit();
  }

  return (
    <PostPage
      postId={postId}
      postText={postText}
      postImageUrl={postImageUrl}
      checkId={createUid === userUid}
      onClick={handleDelete}
      editState={editState}
      onEdit={handleEdit}
      editPostText={editPostText}
      onChange={handleChange}
      onUpdate={handleUpdate}
    />
  );
}
