import React from 'react';

import {
  Switch,
  Route,
} from 'react-router-dom';

import HomeContainer from './HomeContainer';
import AuthContainer from './AuthContainer';

// eslint-disable-next-line react/prop-types
export default function ServiceRouter({ isLoggedIn }) {
  return (
    <>
      <Switch>
        {isLoggedIn ? (
          <Route exact path="/" component={HomeContainer} />
        ) : <Route exact path="/" component={AuthContainer} /> }
      </Switch>
    </>
  );
}
