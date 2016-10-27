import React from 'react';

import Characters from 'components/Characters';

export default class App extends React.Component {

  render() {
    return (
      <div className="wrapper">
        <header className="text-center mrgb+">
          <h1><span className="text-primary">Marvel</span> Superheroes</h1>
        </header>

        <Characters />

        <footer className="text-center mrgt+">
          <a href="http://marvel.com">Data provided by Marvel. © 2016 MARVEL</a>
        </footer>
      </div>
    );
  }

}
