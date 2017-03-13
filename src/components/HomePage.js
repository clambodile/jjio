import React, { Component } from 'react';
import Nameplate from './Nameplate';
import Menu from './Menu';

export default class HomePage extends Component {
  render() {
    return (
      <div className="home-page">
        <Nameplate />
        <Menu />
      </div>
    );
  }
}
