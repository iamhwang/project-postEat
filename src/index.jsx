import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import ServiceRouter from './ServiceRouter';

ReactDOM.render(
  <BrowserRouter>
    <ServiceRouter />
  </BrowserRouter>,
  document.getElementById('app'),
);
