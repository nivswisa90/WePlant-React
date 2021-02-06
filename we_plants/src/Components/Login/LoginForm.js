import React from "react";
import "../Register/form.css";
import useFormLogin from "./useFormLogin";
import validate from "./validateInfo";

const LoginForm = ({ setUserInfo, submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useFormLogin(
    submitForm,
    validate,
    setUserInfo
  );

  return (
    <div className="form-container">
      <div className="form-content-right">
        <h4 id="form-title"> Log in to WePlant</h4>
        <form onSubmit={handleSubmit} className="form" noValidate>
          <div className="form-inputs">
            <label className="form-label">Email</label>
            <input
              className="form-input"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}
          </div>
          <div className="form-inputs">
            <label className="form-label">Password</label>
            <input
              className="form-input"
              type="password"
              name="password"
              placeholder="Enter your password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <p>{errors.password}</p>}
          </div>
          <button className="form-input-btn" type="submit">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};
export default LoginForm;
