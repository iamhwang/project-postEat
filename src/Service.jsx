import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { authService } from './FirebaseInfo';

import ServiceRouter from './ServiceRouter';

import { checkUserState } from './slice';

export default function Service() {
  const dispatch = useDispatch();

  const { isLoggedIn } = useSelector((state) => ({
    isLoggedIn: state.isLoggedIn,
  }));

  useEffect(() => {
    authService.onAuthStateChanged((user) => dispatch(checkUserState(user.email)));
  }, [dispatch]);

  return (
    <>
      <ServiceRouter isLoggedIn={isLoggedIn} />
      <footer>
        &copy;
        Post Eat
        {isLoggedIn}
      </footer>
    </>
  );
}
