/* eslint-disable react/prop-types */
import React from 'react';

import PostEatContainer from './PostEatContainer';

export default function HomePage({
  postingText, onChange, onSubmit, onClick,
}) {
  function handleChange(event) {
    const { target: { value } } = event;
    onChange(value);
  }

  return (
    <>
      <>
        <input
          type="text"
          name="postingText"
          value={postingText}
          onChange={handleChange}
          placeholder="Hello? World!"
          maxLength={120}
        />
        <button
          type="button"
          onClick={onSubmit}
        >
          POST EAT!
        </button>
      </>
      <button
        type="button"
        onClick={onClick}
      >
        LOGOUT
      </button>
      <PostEatContainer />
    </>
  );
}
