/* eslint-disable react/prop-types */
import React from 'react';

import PostContainer from './PostContainer';

export default function PostsPage({ posts }) {
  return (
    <>
      {posts.map((post) => (
        <PostContainer
          key={post.POST_ID}
          postId={post.POST_ID}
          createUid={post.CREATE_UID}
          postText={post.POST_TEXT}
          postImageUrl={post.POST_IMAGE_URL}
        />
      ))}
    </>
  );
}
