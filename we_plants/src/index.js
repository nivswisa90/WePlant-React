import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactRouter from './Router/router';
import reportWebVitals from './reportWebVitals';
import backgroundImage from './Images/BackGroundImage.png';

const styles = {
  backGroundImage : {
      position: "relative",
      width : '100%',
      height : '100%',
  }
}

ReactDOM.render(
  <Router>
    <div style={styles.backGroundImage}>
      <img src={backgroundImage} alt="backgroundImage" />
      <ReactRouter />
    </div>
  </Router>,
  document.getElementById('root')
);


reportWebVitals();
