import React from "react";
import validate from "./validateInfo";
import useForm from "./useFormRegister";
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import "./form.css";
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
  <Container maxWidth="sm">
    <div className="form-register-content">
      <h4 id="form-title"> Register to WePlant</h4>
      <form onSubmit={handleSubmit} className="form" noValidate>
           <div className="form-inputs">
            <TextField id="outlined-basic"
              label="First name"
              variant="outlined"
              type="text"
              name="firstName"
              value={values.firstName}
              onChange={handleChange} />
          {errors.firstName && <p>{errors.firstName}</p>}
        </div>
        <div className="form-inputs">
            <TextField id="outlined-basic"
            label="Last name"
            type="text"
            variant="outlined"
            name="lastName"
            value={values.lastName}
            onChange={handleChange}/>
          {errors.lastName && <p>{errors.lastName}</p>}
        </div>
        <div className="form-inputs">
            <TextField id="outlined-basic"
            label="Email"
            type="email"
            variant="outlined"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="form-inputs">
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
        <div className="form-inputs">
        <TextField id="outlined-basic"
            label="Confirm your password"
            variant="outlined"
            type="password"
            name="password2"
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <div className="register-button">
            <Button variant="outlined" color="primary" type="submit">
              Register
            </Button>
          </div>
        <h4 id="down-title">
          Already have an account?
          <NavLink to="/Login">
            <Button color="primary">login</Button>
          </NavLink>
        </h4>
      </form>
    </div>
    </Container>
  );
};
export default FormSignup;
