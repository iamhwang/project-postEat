/* eslint-disable react/button-has-type */
import React, { useState } from 'react';

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function onChange(event) {
    console.log(event.target.name);
  };
  const onSubmit(event) {
    event.preventDefault();
  };
  return (
    <>
      <>
        <input
          name="email"
          type="text"
          placeholder="Email"
          value={email}
          onChange={onChange}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={onChange}
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
