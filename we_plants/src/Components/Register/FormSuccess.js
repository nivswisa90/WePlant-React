import { Button } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";
import "./form.css";

const FormSuccess = () => {
  return (
    <div className="form-content-right">
      <h1 className="form-success">Congratulations! You are successfully registered to WePlants</h1>
      <NavLink to="/Login">
        <div className="register-login-button">
          <Button variant="outlined" color="secondary">
            Login
          </Button>
        </div>
      </NavLink>
    </div>
  );
};
export default FormSuccess;
