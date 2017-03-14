import React, { Component } from 'react';
import Nameplate from './Nameplate';
import Menu from './Menu';

export default class HomePage extends Component {

  constructor(props) {
    super(props);

    this.descriptors= [
      'Software Engineer',
      'Jingleheimerschmidt',
      'Go Player',
      'Creator',
      'Dungeon Master',
      'Problem Solver',
      'Board Gamer',
      'Please Stop Clicking',
    ];

    this.state = {
      descriptorI : 0,
    };
  }



  render() {
    return (
      <div className="home-page">
        <Nameplate descriptor={this.descriptors[this.state.descriptorI]}/>
        <Menu />
      </div>
    );
  }
}
