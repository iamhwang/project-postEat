/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/prop-types */
import React from 'react';

export default function ProfilepPage({
  userDisplayName, userPhotoUrl, onChange, onEdit, onClick,
}) {
  console.log(userDisplayName);
  console.log(userPhotoUrl);

  function handleChange(event) {
    const { target: { value } } = event;
    onChange(value);
  }

  return (
    <>
      <h5>
        {userDisplayName}
        <img src={userPhotoUrl} />
      </h5>
      <input
        type="text"
        value={userDisplayName}
        onChange={handleChange}
      />
      <button
        type="button"
        onClick={onEdit}
      >
        EDIT
      </button>
      <button
        type="button"
        onClick={onClick}
      >
        LOGOUT
      </button>
    </>
  );
}
