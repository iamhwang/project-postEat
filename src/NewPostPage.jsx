/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/prop-types */
import React from 'react';

export default function NewPostPage({
  newPostText, onChange, newPostImage, onAttach, onSubmit,
}) {
  function handleChange(event) {
    const { target: { value } } = event;
    onChange(value);
  }

  function onFileChange(event) {
    const { target: { files } } = event;

    const theFile = files[0];

    const fileReader = new FileReader();
    fileReader.onload = (finishedEvent) => {
      const {
        currentTarget: { result },
      } = finishedEvent;
      onAttach(result);
    };

    fileReader.readAsDataURL(theFile);
  }

  return (
    <>
      <input
        type="text"
        name="newPostText"
        value={newPostText}
        onChange={handleChange}
        placeholder="Hello? World!"
        maxLength={120}
      />
      <>
        {newPostImage
          && (
          <>
            <img
              src={newPostImage}
              width="100px"
              height="100px"
            />
            <button
              type="button"
              onClick={() => onAttach('')}
            >
              clear
            </button>
          </>
          ) }
      </>
      <input
        type="file"
        accept="image/*"
        onChange={onFileChange}
      />
      <button
        type="button"
        onClick={onSubmit}
      >
        POST EAT!
      </button>
    </>
  );
}
