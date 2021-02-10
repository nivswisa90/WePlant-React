import React from 'react';
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import './app.css';

const WelcomePage = () => {
  return (
      <div className='wrapper'>
      <h3 className="welcome-title">Welcome to WePLants</h3>
      <div style={{ "marginLeft": '27%', 'marginTop': '5%' }}>
        <NavLink to="/Login">
          <Button variant="outlined" color="primary" style={{ "marginRight": "7%" }}>
            Login
          </Button>
        </NavLink>
        <NavLink to="/Register">
          <Button variant="outlined" color="primary">
            Register
          </Button>
        </NavLink>
       </div>
     </div>
  )
};
export default WelcomePage;