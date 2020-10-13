import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import ServiceRouter from './ServiceRouter';
// import { authService } from './FirebaseInfo';

import {
  checkUserState,
} from './slice';

export default function Service() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(checkUserState(authService.currentUser));
  // });
  // console.log(authService.currentUser);

  const { isLoggedIn } = useSelector((state) => ({
    isLoggedIn: state.isLoggedIn,
  }));

  return (
    <>
      <ServiceRouter isLoggedIn={isLoggedIn} />
      <footer>
        &copy;
        Post Eat
      </footer>
    </>
  );
}
