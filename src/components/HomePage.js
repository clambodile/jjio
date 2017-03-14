import React, { Component } from 'react';
import Nameplate from './Nameplate';
import Menu from './Menu';

export default class HomePage extends Component {

  constructor(props) {
    super(props);

    this.descriptors= [
      'Software Engineer',
      'Creator',
      'Problem Solver',
      'Jingleheimerschmidt',
      'Dungeon Master',
      'Organ Donor',
      '6th Grade Spelling Bee Champ',
      'Please stop clicking',
    ];

    this.state = {
      descriptorI : 0,
    };

    this.cycleDescriptor = this.cycleDescriptor.bind(this);

  }

  cycleDescriptor(e) {
    if (this.state.descriptorI < this.descriptors.length - 1) {
      this.setState({ descriptorI: this.state.descriptorI + 1});
    }
    else {
      this.setState({ descriptorI: 0 });
    }
  }

  render() {
    return (
      <div className="home-page">
        <Nameplate 
          descriptor={this.descriptors[this.state.descriptorI]}
          cycleDescriptor={this.cycleDescriptor}
        />
        <Menu />
      </div>
    );
  }
}
