import React from 'react';

import {
  Switch,
  Route,
} from 'react-router-dom';

import HomeContainer from './HomeContainer';
import ProfilePage from './Profile';
import EditProfilePage from './EditProfile';
import AuthContainer from './AuthContainer';

// eslint-disable-next-line react/prop-types
export default function ServiceRouter({ isLoggedIn }) {
  return (
    <>
      <Switch>
        {isLoggedIn ? (
          <Route path="/" component={HomeContainer} />
        ) : <Route path="/" component={AuthContainer} /> }
        <Route path="/profile" component={ProfilePage} />
        <Route path="/edit" component={EditProfilePage} />
        <Route path="/" component={AuthContainer} />
      </Switch>
    </>
  );
}
