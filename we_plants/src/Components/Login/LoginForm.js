import React from "react";
import "../Register/form.css";
import useFormLogin from "./useFormLogin";
import validate from "./validateInfo";
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

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
        <form onSubmit={handleSubmit} className="form" noValidate>
          <div className="form-inputs">
            <TextField id="outlined-basic"
              label="Email"
              variant="outlined"
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange} />
            {/* <label className="form-label">Email</label> */}
            {/* <input
              className="form-input"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={values.email}
              onChange={handleChange}
            /> */}
            {errors.email && <p>{errors.email}</p>}
          </div>
          <div className="form-inputs">
            {/* <label className="form-label">Password</label> */}
            <TextField id="outlined-basic"
              label="Password"
              variant="outlined"
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <p>{errors.password}</p>}
          </div>
          <Button variant="outlined" color="primary" type="submit">
        Log In
      </Button>
          {/* <button className="form-input-btn" type="submit">
            Log in
          </button> */}
        </form>
      </div>
      {/* </div> */}
    </Container>
  );
};
export default LoginForm;
