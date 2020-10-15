import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  changeLoginField,
  createUserId,
  loginUserId,
} from './slice';

import AuthPage from './AuthPage';

export default function AuthContainer() {
  const dispatch = useDispatch();

  const { loginFields, authError } = useSelector((state) => ({
    loginFields: state.loginFields,
    authError: state.authError,
  }));

  function handleChange({ name, value }) {
    dispatch(changeLoginField({ name, value }));
  }

  function handleSubmit() {
    dispatch(createUserId());
  }

  function handleClick() {
    dispatch(loginUserId());
  }

  return (
    <AuthPage
      fields={loginFields}
      onChange={handleChange}
      onSubmit={handleSubmit}
      onClick={handleClick}
      authError={authError}
    />
  );
}
