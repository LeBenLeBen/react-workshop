import React from 'react';

export default class Loader extends React.Component {

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className="loader">
        <span className="dot dot--1" />
        <span className="dot dot--2" />
        <span className="dot dot--3" />
        <span className="dot dot--4" />
      </div>
    );
  }
}
