import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  changeLoginField,
  createUserId,
  signInUserId,
} from './slice';

import AuthPage from './AuthPage';

export default function AuthContainer() {
  const dispatch = useDispatch();

  const { loginFields } = useSelector((state) => ({
    loginFields: state.loginFields,
  }));

  function handleChange({ name, value }) {
    dispatch(changeLoginField({ name, value }));
  }

  function handleSubmit() {
    dispatch(createUserId());
  }

  function handleClick() {
    dispatch(signInUserId());
  }

  return (
    <AuthPage
      fields={loginFields}
      onChange={handleChange}
      onSubmit={handleSubmit}
      onClick={handleClick}
    />
  );
}
