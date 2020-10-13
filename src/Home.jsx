import React from 'react';
import { useDispatch } from 'react-redux';

import { authService } from './FirebaseInfo';

import {
  logoutUserId,
} from './slice';

export default function Home() {
  const dispatch = useDispatch();

  function handleClick() {
    authService.signOut();
    dispatch(logoutUserId());
  }

  return (
    <>
      <p>Home</p>
      <button
        type="button"
        onClick={handleClick}
      >
        LOGOUT
      </button>
    </>
  );
}
