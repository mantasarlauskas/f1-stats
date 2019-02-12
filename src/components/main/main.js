import React, { Component } from 'react';
import './main.scss';
import Nav from '../nav';

class Main extends Component {
  render() {
    return (
      <div className={'container'}>
        <Nav />
      </div>
    )
  }
}

export default Main;