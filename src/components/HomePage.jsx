import React, { Component } from 'react';
import Nameplate from './Nameplate.jsx';
import Menu from './Menu.jsx';

export default class HomePage extends Component {

  constructor(props) {
    super(props);

    this.descriptors= [
      'Software Engineer',
      'Web Developer',
      'Creator',
      'Jingleheimerschmidt',
      'Organ Donor',
      '6th Grade Spelling Bee Champ',
    ];

    this.state = {
      descriptorI : 0,
      descriptorState: '',
      handle: '',
    };

    this.cycleDescriptor = this.cycleDescriptor.bind(this);
    this.fadeOutDescriptor = this.fadeOutDescriptor.bind(this);
    this.fadeInDescriptor = this.fadeInDescriptor.bind(this);
    this.resetAnimation = this.resetAnimation.bind(this);

  }

  componentWillMount() {
    this.setState({handle: setInterval(this.cycleDescriptor.bind(this), 3000)})
  }

  componentWillUnmount() {
    clearInterval(this.state.handle)
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
