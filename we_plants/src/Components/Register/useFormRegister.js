import { useState, useEffect } from "react";
import axios from "axios";

const useForm = (callback, validate, setUserInfo) => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password2: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    axios
      .post("https://weplants.herokuapp.com/api/users", values, {withCredentials: true})
      .then((res) => {
        setUserInfo({
          id: res.data.id,
          role: res.data.role,
          firstName: res.data.firstName,
          lastName: res.data.lastName,
          myFavorites: res.data.myFavorites,
          email: res.data.email
        })
        if (res.data === "User already exist") {
          alert(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [callback, errors, isSubmitting]);

  return { handleChange, handleSubmit, values, errors };
};
export default useForm;
