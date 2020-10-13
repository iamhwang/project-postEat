import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import Service from './Service';

ReactDOM.render(
  <BrowserRouter>
    <Service />
  </BrowserRouter>,
  document.getElementById('app'),
);
