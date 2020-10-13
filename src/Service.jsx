import React, { useState } from 'react';

import ServiceRouter from './ServiceRouter';
import { authService } from './FirebaseInfo';

export default function Service() {
  const [isLoggedIn] = useState(authService.currentUser);
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
