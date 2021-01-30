import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import {NavLink} from 'react-router-dom';
import Button from "@material-ui/core/Button";
import './Form.css';

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='form-content-right'>
      <h4 id='form-title'> Register to WePlant</h4>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <div className='form-inputs'>
          <label className='form-label'>First name</label>
          <input
            className='form-input'
            type='text'
            name='first_name'
            placeholder='Enter your first name'
            value={values.first_name}
            onChange={handleChange}
          />
          {errors.first_name && <p>{errors.first_name}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Last name</label>
          <input
            className='form-input'
            type='text'
            name='last_name'
            placeholder='Enter your last name'
            value={values.last_name}
            onChange={handleChange}
          />
          {errors.last_name && <p>{errors.last_name}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Confirm Password</label>
          <input
            className='form-input'
            type='password'
            name='password2'
            placeholder='Confirm your password'
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button className='form-input-btn' type='submit'>
          Sign up
        </button>
        
        <h4>Already have an account?
        <NavLink to='/Login'>
        <Button color="primary">login</Button>
        </NavLink>
        </h4>
      </form>
    </div>
  );
};

export default FormSignup;