import React from 'react';

import { useSelector } from 'react-redux';

import ServiceRouter from './ServiceRouter';

export default function Service() {
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
