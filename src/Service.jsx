import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { authService } from './FirebaseInfo';

import ServiceRouter from './ServiceRouter';

import { checkUserState } from './slice';

export default function Service() {
  const { userEmail } = useSelector((state) => ({
    userEmail: state.isLoggedIn.userEmail,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      const {
        email, uid, displayName, photoURL,
      } = user;

      dispatch(checkUserState({
        email, uid, displayName, photoURL,
      }));
    });
  }, [dispatch]);

  return (
    <>
      <ServiceRouter isLoggedIn={userEmail} />
      <>
        <footer>
          &copy;
          Post Eat @iamhwang
        </footer>
      </>
    </>
  );
}
