/* eslint-disable react/prop-types */
import React from 'react';

export default function ProfilepPage({ onClick }) {
  return (
    <>
      <button
        type="button"
        onClick={onClick}
      >
        LOGOUT
      </button>
    </>
  );
}
