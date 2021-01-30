import { useState, useEffect } from 'react';
import axios from 'axios';


const useForm = (callback, validate, setUserInfo) => {
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
    axios.post(`https://weplants.herokuapp.com/api/users/${values.email}`, values)
      .then((res) => {
        console.log(res.data);
        if (res.data === 'Wrong password') {
          alert('Wrong password');
        }
        else
          setUserInfo({
            first_name: res.data.first_name,
            last_name: res.data.last_name
          })
      })
      .catch((err) => { console.log(err) });
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