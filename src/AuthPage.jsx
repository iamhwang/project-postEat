/* eslint-disable react/prop-types */
import React from 'react';

export default function AuthPage({
  fields, onChange, onClick, onSubmit, LoginErrorMessage,
}) {
  const { email, password } = fields;

  function handleChange(event) {
    const { target: { name, value } } = event;
    onChange({ name, value });
  }

  return (
    <>
      <>
        <input
          name="email"
          type="text"
          placeholder="Email"
          value={email}
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={handleChange}
        />
      </>
      <>
        <button
          type="button"
          onClick={onClick}
        >
          LOGIN
        </button>
        <button
          type="button"
          onClick={onSubmit}
        >
          SIGNIN
        </button>
        {LoginErrorMessage}
      </>
    </>
  );
}
