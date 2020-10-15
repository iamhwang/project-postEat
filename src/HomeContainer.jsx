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

  const { postingText } = useSelector((state) => ({
    postingText: state.postingText,
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
      onChange={handleChange}
      onSubmit={handleSubmit}
      onClick={handleClick}
    />
  );
}
