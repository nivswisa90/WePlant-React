import React, { useState,useContext } from "react";
import "./form.css";
import FormSignup from "./formSignup";
import {UserContext} from '../userContext';
import Login from "../Login/login";


const Form = (props) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {userInfo, setUserInfo} = useContext(UserContext);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <div className="form-container">
      {!isSubmitted ? <FormSignup submitForm={submitForm} setUserInfo={setUserInfo} /> : <Login /> }
    </div>
  );
};
export default Form;
