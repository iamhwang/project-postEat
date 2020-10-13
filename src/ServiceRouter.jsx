import React, { useState } from 'react';

import {
  Switch,
  Route,
} from 'react-router-dom';

import HomePage from './Home';
import ProfilePage from './Profile';
import EditProfilePage from './EditProfile';
import AuthPage from './Auth';

export default function App() {
  const [isLoggedIn] = useState(false);

  return (
    <>
      <Switch>
        {isLoggedIn ? (
          <Route exact path="/" component={HomePage} />
        ) : <Route exact path="/" component={AuthPage} /> }
        <Route path="/profile" component={ProfilePage} />
        <Route path="/edit" component={EditProfilePage} />
        <Route path="/" component={EditProfilePage} />
      </Switch>
    </>
  );
}
