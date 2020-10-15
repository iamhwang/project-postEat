import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { authService } from './FirebaseInfo';

import ServiceRouter from './ServiceRouter';

import { checkUserState } from './slice';

export default function Service() {
  const dispatch = useDispatch();

  const { userEmail, userUid } = useSelector((state) => ({
    userEmail: state.isLoggedIn.userEmail,
    userUid: state.isLoggedIn.userUid,
  }));

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      const { email, uid } = user;
      dispatch(checkUserState({ email, uid }));
    });
  }, [dispatch]);

  return (
    <>
      <ServiceRouter isLoggedIn={userEmail} />
      {/* <p>{userEmail}</p>
      <p>{userUid}</p>
      <>
        <footer>
          &copy;
          Post Eat
        </footer>
      </> */}
    </>
  );
}
