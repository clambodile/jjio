import React, { Component } from 'react';
import Button from './Button.jsx';

export default class ResumePage extends Component {

  render() {
    return (
      <div className="resume-page">
        
        <Button text="Back" route="/"/>
      </div>
    );
  }
}

