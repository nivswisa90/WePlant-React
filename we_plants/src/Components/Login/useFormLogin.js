import { useState, useEffect } from "react";
import axios from "axios";

const useForm = (callback, validate, setUserInfo) => {
  const [values, setValues] = useState({
    id: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(validate(values));
    axios
      .post(`https://weplants.herokuapp.com/api/users/${values.email}`, values,)
      .then((res) => {
        if (
          res.data === "Wrong password" ||
          res.data === "User does not exist"
        ) {
          alert("User or password did not match");
        } else {
          setIsSubmitted(true);
          setUserInfo({
            id: res.data.id,
            role: res.data.role,
            firstName: res.data.firstName,
            lastName: res.data.lastName,
            myFavorites: res.data.myFavorites,
            email: res.data.email
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitted) {
      callback();
    }
  }, [callback, errors, isSubmitted]);

  return { handleChange, handleSubmit, values, errors };
};
export default useForm;
