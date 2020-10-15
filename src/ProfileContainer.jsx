/* eslint-disable react/prop-types */
import React from 'react';

import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { authService } from './FirebaseInfo';

import {
  logoutUserId,
} from './slice';

import ProfilepPage from './ProfilePage';

export default function ProfileContainer() {
  const history = useHistory();
  const dispatch = useDispatch();

  function handleClick() {
    authService.signOut();
    dispatch(logoutUserId());
    history.push('/');
  }

  return (
    <>
      <ProfilepPage onClick={handleClick} />
    </>
  );
}
