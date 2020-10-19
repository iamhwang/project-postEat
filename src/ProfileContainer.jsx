/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { authService } from './FirebaseInfo';

import {
  editProfileDisplayName,
  changeUserDisplayName,
  logoutUserId,
} from './slice';

import ProfilepPage from './ProfilePage';

export default function ProfileContainer() {
  const [editState, changeEditState] = useState(false);

  const { isLoggedIn } = useSelector((state) => ({
    isLoggedIn: state.isLoggedIn,
  }));

  const history = useHistory();
  const dispatch = useDispatch();

  function handleChange(value) {
    dispatch(editProfileDisplayName(value));
  }

  function handleEdit() {
    changeEditState((prev) => !prev);
  }

  function handleSave() {
    handleEdit();
    dispatch(changeUserDisplayName());
  }

  function handleClick() {
    authService.signOut();
    dispatch(logoutUserId());
    history.push('/');
  }

  return (
    <>
      <ProfilepPage
        isLoggedIn={isLoggedIn}
        onChange={handleChange}
        editState={editState}
        onEdit={handleEdit}
        onSave={handleSave}
        onClick={handleClick}
      />
    </>
  );
}
