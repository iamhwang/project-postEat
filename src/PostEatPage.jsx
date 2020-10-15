/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable no-alert */
/* eslint-disable react/prop-types */
import React from 'react';

export default function PostEatPage({
  postId, postEat, checkId, onClick, editState, onEdit, postEatEdit, onChange, onUpdate,
}) {
  function handleDelete(postingId) {
    const message = window.confirm('Do you want to delete this posteat?');

    if (message) {
      onClick(postingId);
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
          value={postEatEdit}
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
            <button type="button" onClick={() => handleDelete(postId)}>
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
          {postEat}
          {buttonForWriter()}
           </>}
      </>
    );
  }

  // eslint-disable-next-line no-unused-vars
  function allPostEatData() {
    return (
      <>
        {postEat}
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
