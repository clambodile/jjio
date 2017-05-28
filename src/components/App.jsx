import React, { Component } from 'react';
import { BrowserRouter, Route, Link, BrowserHistory } from 'react-router-dom';
import ReactDOM from 'react-dom';

import HomePage from './HomePage.jsx';
import AboutPage from './AboutPage.jsx';
import ContactPage from './ContactPage.jsx';
import ResumePage from './ResumePage.jsx';

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
