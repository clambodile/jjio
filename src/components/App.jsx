import React, { Component } from 'react';
import { BrowserRouter, Route, Link, BrowserHistory } from 'react-router-dom';
import ReactDOM from 'react-dom';

import HomePage from './HomePage.js';
import AboutPage from './AboutPage.js';
import ContactPage from './ContactPage.js';
import ResumePage from './ResumePage.js';

export default class App extends Component {
  
  render() {
    return (
      <BrowserRouter history={BrowserHistory}>
        <div>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/resume" component={ResumePage} />
        </div>
      </BrowserRouter>
    );
  }
}
