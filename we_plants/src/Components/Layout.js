import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Login from "./Login/Login";
import Form from "./Register/Form";
import "./Layout.css";

const Layout = () => {
  const [isRegister, setIsRegister] = useState(false);

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
export default Layout;
