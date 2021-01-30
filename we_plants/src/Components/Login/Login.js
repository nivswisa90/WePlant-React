import React, { useState } from 'react';
import MainPage from '../MainPage/mainPage';
import '../Register/form.css';
import LoginForm from './loginForm';

const Login = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [userInfo, setUserInfo] = useState({
        first_name: '',
        last_name: ''
      });

    function submitForm() {
        setIsLoggedIn(false);
    }

    return (
        <div>
            {isLoggedIn ? <LoginForm setUserInfo={setUserInfo} submitForm={submitForm}/> : <MainPage userInfo={userInfo}/>}
        </div>
    )
}

export default Login;