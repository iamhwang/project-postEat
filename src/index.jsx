import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from './store';
import Service from './Service';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Service />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app'),
);
