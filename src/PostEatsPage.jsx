/* eslint-disable react/prop-types */
import React from 'react';

import PostEatContainer from './PostEatContainer';

export default function PostEatsPage({ postEats }) {
  // function handleEdit(postingPostEat) {
  //   return (
  //     <>
  //       <input value={postingPostEat} />
  //     </>
  //   );
  // }
  return (
    <>
      {postEats.map((postEat) => (
        <PostEatContainer
          key={postEat.id}
          postId={postEat.id}
          postCreatorId={(postEat.creatorId)}
          postEat={postEat.postEat}
        />
      ))}
    </>
  );
}
