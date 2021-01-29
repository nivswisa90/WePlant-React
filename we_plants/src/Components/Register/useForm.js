import { useState, useEffect } from 'react';
import axios from 'axios';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    first_name: '',
    last_name:'',
    email: '',
    password: '',
    password2: ''
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
    console.log(values);
    axios.post('https://weplants.herokuapp.com/api/users', values)
    .then((res) => {
        if(res.data === "User already exist"){
            alert(res.data);
        }
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