import React from 'react';

import {
  Switch,
  Route,
} from 'react-router-dom';

import HomePage from './Home';
import ProfilePage from './Profile';
import EditProfilePage from './EditProfile';
import AuthContainer from './AuthContainer';

// eslint-disable-next-line react/prop-types
export default function ServiceRouter({ isLoggedIn }) {
  return (
    <>
      <Switch>
        {isLoggedIn ? (
          <Route exact path="/" component={HomePage} />
        ) : <Route exact path="/" component={AuthContainer} /> }
        <Route path="/profile" component={ProfilePage} />
        <Route path="/edit" component={EditProfilePage} />
        <Route path="/" component={EditProfilePage} />
      </Switch>
    </>
  );
}
