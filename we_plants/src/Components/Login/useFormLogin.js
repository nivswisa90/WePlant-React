import { useState, useEffect } from 'react';
import axios from 'axios';


const useForm = (callback, validate,setUserInfo) => {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});

  const [isSubmitting, setIsSubmitting] = useState(false);
  

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setErrors(validate(values));
    axios.get(`https://weplants.herokuapp.com/api/users?email=${values.email}`)
    // axios.get(`http://localhost:3001/api/users?email=${values.email}`)
    .then((res) => {
        if(res.data === "User already exist"){
            alert(res.data);
        }
        else
          setUserInfo({
            first_name : res.data.first_name,
            last_name : res.data.last_name
          })
    })
    .catch((err) => {console.log(err)});
    setIsSubmitting(true);
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    [callback, errors, isSubmitting]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;