/* eslint-disable react/prop-types */
import React from 'react';

import { useSelector } from 'react-redux';

import PostEatsPage from './PostEatsPage';

export default function PostEatsContainer() {
  const { postEats } = useSelector((state) => ({
    postEats: state.postEats,
  }));

  return (
    <PostEatsPage postEats={postEats} />
  );
}
