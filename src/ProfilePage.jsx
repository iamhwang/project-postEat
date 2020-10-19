/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/prop-types */
import React from 'react';

export default function ProfilepPage({
  isLoggedIn, onChange, editState, onEdit, onSave, onClick,
}) {
  const { userEmail, userDisplayName, userPhotoUrl } = isLoggedIn;

  function handleChange(event) {
    const { target: { value } } = event;
    onChange(value);
  }

  return (
    <>
      <h4>{userEmail}</h4>
      {userDisplayName}
      <h5>
        {userDisplayName ? <>{userDisplayName}</> : <> Hey, No Name </> }
      </h5>
      {userPhotoUrl
        ? <img src={userPhotoUrl} width="100px" height="100px" />
        : <img width="100px" height="100px" /> }
      {editState
          && (
          <>
            <input
                type="text"
                value={userDisplayName}
                onChange={handleChange}
            />
            <button
              type="button"
              onClick={onSave}
            >
              수정
            </button>
          </>
          )}
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
