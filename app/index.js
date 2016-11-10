import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from 'App';
import Characters from 'components/Characters';
import Character from 'components/Character';

import 'styles/main.scss';

document.addEventListener('DOMContentLoaded', function() {
  render(
    <Router history={ hashHistory }>
      <Route path="/" component={ App }>
        <IndexRoute component={ Characters } />
        <Route path="character/:id" component={ Character } />
      </Route>
    </Router>,
    document.getElementById('app')
  );
});
