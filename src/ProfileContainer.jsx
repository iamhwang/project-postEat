/* eslint-disable react/prop-types */
import React from 'react';

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
  const { isLoggedIn: { userDisplayName, userPhotoUrl } } = useSelector((state) => ({
    isLoggedIn: state.isLoggedIn,
  }));

  const history = useHistory();
  const dispatch = useDispatch();

  function handleChange(value) {
    dispatch(editProfileDisplayName(value));
  }

  function handleEdit() {
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
        userDisplayName={userDisplayName}
        userPhotoUrl={userPhotoUrl}
        onChange={handleChange}
        onEdit={handleEdit}
        onClick={handleClick}
      />
    </>
  );
}
