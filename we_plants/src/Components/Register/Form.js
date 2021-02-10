import React, { useState,useContext } from "react";
import "./form.css";
import FormSignup from "./formSignup";
import FormSuccess from "./formSuccess";
import {UserContext} from '../userContext';


const Form = (props) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {userInfo, setUserInfo} = useContext(UserContext);
  // console.log(userInfo);
  function submitForm() {
    setIsSubmitted(true);
  }
  console.log(props);

  return (
    <div className="form-container">
      {!isSubmitted ? <FormSignup submitForm={submitForm} /> : <FormSuccess />}
    </div>
  );
};
export default Form;
