import React from 'react';
import { render } from 'react-dom';

import App from 'App';

import 'styles/main.scss';

document.addEventListener('DOMContentLoaded', function() {
  render(
    <App/>,
    document.getElementById('app')
  );
});
