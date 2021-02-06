import React, { useState } from "react";
import "./form.css";
import FormSignup from "./formSignup";
import FormSuccess from "./formSuccess";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <div className="form-container">
      {!isSubmitted ? <FormSignup submitForm={submitForm} /> : <FormSuccess />}
    </div>
  );
};
export default Form;
