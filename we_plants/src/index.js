import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import App from './Components/App/app';

ReactDOM.render(
    <Router>
      <App />
    </Router>,
  document.getElementById('root')
);

reportWebVitals();
