import React from "react";
import "../Register/form.css";
import useFormLogin from "./useFormLogin";
import validate from "./validateInfo";
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { NavLink } from "react-router-dom";



const LoginForm = ({ setUserInfo, submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useFormLogin(
    submitForm,
    validate,
    setUserInfo
  );


  return (
    <Container maxWidth="sm">
      {/* <div className="form-container"> */}
      <div className="form-login-content">
        <h4 id="form-title"> Log in to WePlant</h4>
        <form onSubmit={handleSubmit}  noValidate>
          <div className="form-inputs">
            <TextField id="outlined-basic"
              label="Email"
              variant="outlined"
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange} />
            {errors.email && <p>{errors.email}</p>}
          </div>
          <div className="form-inputs">
            {/* <label className="form-label">Password</label> */}
            <TextField
              className="input-style"
              label="Password"
              variant="outlined"
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <p>{errors.password}</p>}
          </div>
          <div className="login-button">
            <Button variant="outlined" color="primary" type="submit">
              Log In
            </Button>
          </div>
          <NavLink to="/Register">
            <div className="register-button">
          <Button variant="outlined" color="secondary">
            Create new account
          </Button>
          </div>
        </NavLink>
        </form>
      </div>
    </Container>
  );
};
export default LoginForm;
