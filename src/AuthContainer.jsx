import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import {
  changeLoginField,
  createUserId,
  loginUserId,
} from './slice';

import AuthPage from './AuthPage';

export default function AuthContainer() {
  const { loginFields, authError } = useSelector((state) => ({
    loginFields: state.loginFields,
    authError: state.authError,
  }));

  const dispatch = useDispatch();

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
      onClick={handleClick}
      onSubmit={handleSubmit}
      authError={authError}
    />
  );
}
