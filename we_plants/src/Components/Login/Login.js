import React, { useEffect, useState } from 'react';
import MainPage from '../MainPage/MainPage';
import '../Register/Form.css';
import LoginForm from './LoginForm';

const Login = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [userInfo, setUserInfo] = useState({
        first_name: '',
        last_name: ''
      });

    function submitForm() {
        setIsLoggedIn(false);
    }
    useEffect(() => {
        console.log(userInfo);
    },[userInfo])

    return (
        <div>
            {isLoggedIn ? <LoginForm setUserInfo={setUserInfo} submitForm={submitForm}/> : <MainPage userInfo={userInfo}/>}
        </div>
    )
}

export default Login;