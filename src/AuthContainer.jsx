import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import {
  changeLoginField,
  createUserId,
  loginUserId,
  loginUserIdWithGoogle,
} from './slice';

import AuthPage from './AuthPage';

export default function AuthContainer() {
  const { loginFields, LoginErrorMessage } = useSelector((state) => ({
    loginFields: state.loginFields,
    LoginErrorMessage: state.LoginErrorMessage,
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

  function handleGoogleLogin() {
    dispatch(loginUserIdWithGoogle());
  }

  return (
    <AuthPage
      fields={loginFields}
      onChange={handleChange}
      onClick={handleClick}
      onSubmit={handleSubmit}
      onGoogle={handleGoogleLogin}
      LoginErrorMessage={LoginErrorMessage}
    />
  );
}
