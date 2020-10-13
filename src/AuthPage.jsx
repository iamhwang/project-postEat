/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import React from 'react';

export default function AuthPage({
  fields, onChange, onSubmit,
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
        <input type="submit" value="Log In" />
      </>
      <>
        <button
          type="button"
          onClick={onSubmit}
        >
          Continue with Email
        </button>
      </>
    </>
  );
}
