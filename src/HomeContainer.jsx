import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { authService } from './FirebaseInfo';

import HomePage from './HomePage';

import {
  logoutUserId,
  changePostEat,
  postEatOnFirebase,
  getPostEatOnFirebase,
} from './slice';

export default function HomeContainer() {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostEatOnFirebase());
  }, [dispatch]);

  const { postingText, postEats } = useSelector((state) => ({
    postingText: state.postingText,
    postEats: state.postEats,
  }));

  function handleChange(value) {
    dispatch(changePostEat(value));
  }

  function handleSubmit() {
    dispatch(postEatOnFirebase());
  }

  function handleClick() {
    authService.signOut();
    dispatch(logoutUserId());
    history.push('/');
  }

  return (
    <HomePage
      postingText={postingText}
      postEats={postEats}
      onChange={handleChange}
      onSubmit={handleSubmit}
      onClick={handleClick}
    />
  );
}
