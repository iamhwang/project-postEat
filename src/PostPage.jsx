/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable no-alert */
/* eslint-disable react/prop-types */
import React from 'react';

export default function PostPage({
  postId, postText, postImageUrl, checkId,
  onClick, editState, onEdit, editPostText, onChange, onUpdate,
}) {
  function handleDelete(id, url) {
    const message = window.confirm('Do you want to delete this posteat?');

    if (message) {
      onClick(id, url);
    }
  }

  function handleChange(event) {
    const { target: { value } } = event;
    onChange(value);
  }

  function onClickEdit() {
    return (
      <>
        <input
          type="text"
          value={editPostText}
          onChange={handleChange}
        />
        <button type="button" onClick={onEdit}>취소</button>
        <button type="button" onClick={() => onUpdate(postId)}>수정</button>
      </>
    );
  }

  function buttonForWriter() {
    return (
      <>
        {checkId
          && <>
            <button type="button" onClick={() => handleDelete(postId, postImageUrl)}>
              Delete
            </button>
            <button type="button" onClick={onEdit}>
              Edit
            </button>
             </>}
      </>
    );
  }

  // eslint-disable-next-line no-unused-vars
  function myPostEatData() {
    return (
      <>
        {checkId
        && <>
          {postText}
          {buttonForWriter()}
           </>}
      </>
    );
  }

  // eslint-disable-next-line no-unused-vars
  function allPostEatData() {
    return (
      <>
        <img src={postImageUrl} width="150px" height="150px" />
        {postText}
        {buttonForWriter()}
      </>
    );
  }

  return (
    <div>
      { editState
        ? <>
          {onClickEdit()}
          </>
        : <>
          {allPostEatData()}
          </>}
    </div>
  );
}
