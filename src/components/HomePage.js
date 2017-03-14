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
      descriptorState: '',
    };

    this.cycleDescriptor = this.cycleDescriptor.bind(this);
    this.fadeOutDescriptor = this.fadeOutDescriptor.bind(this);
    this.fadeInDescriptor = this.fadeInDescriptor.bind(this);
    this.resetAnimation = this.resetAnimation.bind(this);

  }

  resetAnimation() {
    this.setState({
      descriptorState: ''
    });
  }

  fadeInDescriptor() {
    this.setState({
     descriptorState: 'fadeInDown' 
    });
  }

  fadeOutDescriptor() {
    this.setState({
     descriptorState: 'fadeOutDown' 
    });
  }

  cycleDescriptor(e) {
    this.fadeOutDescriptor();
    if (this.state.descriptorI < this.descriptors.length - 1) {
      this.setState({ 
        descriptorI: this.state.descriptorI + 1,
      });
    }
    else {
      this.setState({ 
        descriptorI: 0,
      });
    }
    this.fadeInDescriptor();
    setTimeout(this.resetAnimation, 300);
  }

  render() {
    return (
      <div className="home-page">
        <Nameplate 
          descriptor={this.descriptors[this.state.descriptorI]}
          cycleDescriptor={this.cycleDescriptor}
          animationState={this.state.descriptorState}
        />
        <Menu />
      </div>
    );
  }
}
