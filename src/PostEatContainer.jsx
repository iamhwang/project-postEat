/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import {
  deletePostEatOnFirebase,
  editPostEat,
  updatePostEatOnFirebase,
} from './slice';

import PostEatPage from './PostEatPage';

export default function PostEatContainer({ postId, postCreatorId, postEat }) {
  const [editState, onEdit] = useState(false);

  const { userUid, postEatEdit } = useSelector((state) => ({
    userUid: state.isLoggedIn.userUid,
    postEatEdit: state.postEatEdit,
  }));

  const dispatch = useDispatch();

  function handleDelete(value) {
    dispatch(deletePostEatOnFirebase(value));
  }

  function handleChange(value) {
    dispatch(editPostEat(value));
  }

  function handleEdit() {
    onEdit((prev) => !prev);
  }

  function handleUpdate(value) {
    dispatch(updatePostEatOnFirebase(value));
    handleEdit();
  }

  return (
    <PostEatPage
      postId={postId}
      postEat={postEat}
      checkId={postCreatorId === userUid}
      onClick={handleDelete}
      editState={editState}
      onEdit={handleEdit}
      postEatEdit={postEatEdit}
      onChange={handleChange}
      onUpdate={handleUpdate}
    />
  );
}
