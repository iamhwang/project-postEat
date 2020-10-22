import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { authService } from './FirebaseInfo';

import ServiceRouter from './ServiceRouter';

import { checkUserState } from './slice';

import useStyles from './css';

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

  const cssStyle = useStyles();

  return (
    <div className={cssStyle.background}>
      <ServiceRouter isLoggedIn={userEmail} />
    </div>
  );
}
