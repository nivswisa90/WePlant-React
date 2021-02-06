import React from "react";
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import "./app.css";

const App = () => {
  return (
    <div className="container">
      <h3 className="welcome-title">Welcome to WePLants</h3>
      <div>
        <NavLink to="/Login">
          <Button variant="outlined" color="primary">
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
  );
};

export default App;
