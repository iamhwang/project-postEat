/* eslint-disable react/button-has-type */
import React from 'react';

export default function AuthPage() {
  return (
    <>
      <>
        <input
          name="email"
          type="text"
          placeholder="Email"
        />
        <input
          type="password"
          placeholder="Password"
        />
        <input type="submit" value="Log In" />
      </>
      <>
        <button>Continue with Email</button>
        <button>Continue with Google</button>
      </>
    </>
  );
}
