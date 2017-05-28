import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App.jsx';

require('./stylesheets/main.scss');     

ReactDOM.render(
  <App />,
document.getElementById('app-container'));

