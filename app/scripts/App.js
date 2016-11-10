import React from 'react';
import { Link } from 'react-router';

export default class App extends React.Component {

  render() {
    return (
      <div className="wrapper">
        <header className="text-center mrgb+">
          <Link to="/">
            <h1><span className="text-primary">Marvel</span> Superheroes</h1>
          </Link>
        </header>

        { this.props.children }

        <footer className="text-center mrgt+">
          <a href="http://marvel.com">Data provided by Marvel. © 2016 MARVEL</a>
        </footer>
      </div>
    );
  }

}
