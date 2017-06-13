import React, { Component } from 'react';
import BackButton from './BackButton.jsx';

export default class ResumePage extends Component {

  render() {
    return (
      <div className="page resume-page">
        <div className="resume">
          <h1 className="res-1">Technical Skills</h1>
          <hr/>
          <h1 className="res-2">Recent Projects</h1>
          <hr/>
          <h1 className="res-3">Professional Experience</h1>
          <hr/>
          <h1 className="res-4">Education</h1>
          <hr/>
          <h1 className="res-5">Personal</h1>
          <hr/>
        </div>
        <BackButton />
      </div>
    );
  }
}

