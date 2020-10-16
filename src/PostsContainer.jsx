/* eslint-disable react/prop-types */
import React from 'react';

import { useSelector } from 'react-redux';

import PostsPage from './PostsPage';

export default function PostsContainer() {
  const { posts } = useSelector((state) => ({
    posts: state.posts,
  }));

  return (
    <PostsPage posts={posts} />
  );
}
