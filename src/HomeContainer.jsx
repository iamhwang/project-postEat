import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import ProfileContainer from './ProfileContainer';
import NewPostContainer from './NewPostContainer';
import PostsContainer from './PostsContainer';

import {
  getPostsFromFirebase,
} from './slice';

export default function HomeContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostsFromFirebase());
  }, [dispatch]);

  return (
    <>
      <NewPostContainer />
      <PostsContainer />
      <ProfileContainer />
    </>
  );
}
