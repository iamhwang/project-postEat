/* eslint-disable react/prop-types */
import React from 'react';

export default function PostEatPage({ postEats, userUid, onClick }) {
  function handleDelete(postingId) {
    // eslint-disable-next-line no-alert
    const message = window.confirm('Do you want to delete this posteat?');

    if (message) {
      onClick(postingId);
    }
  }
  return (
    <>
      {postEats.map((posting) => (
        <h5 key={posting.id}>
          {posting.postEat}
          {(posting.creatorId === userUid) && (
            <>
              <button
                type="button"
                onClick={() => handleDelete(posting.id)}
              >
                Delete
              </button>
              <button
                type="button"
              >
                Edit
              </button>
            </>
          )}
        </h5>
      ))}
    </>
  );
}
