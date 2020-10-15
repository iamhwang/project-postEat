import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import ProfileContainer from './ProfileContainer';
import PostContainer from './PostContainer';
import PostEatsContainer from './PostEatsContainer';

import {
  getPostEatOnFirebase,
} from './slice';

export default function HomeContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostEatOnFirebase());
  }, [dispatch]);

  return (
    <>
      <PostContainer />
      <PostEatsContainer />
      <ProfileContainer />
    </>
  );
}
