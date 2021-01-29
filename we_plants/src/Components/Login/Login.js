import React, { useState } from 'react';
import '../Register/Form.css';
import LoginForm from './LoginForm';

const Login = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    function submitForm() {
        setIsLoggedIn(false);
    }

    return (
        <div>
            {isLoggedIn ? <LoginForm submitForm={submitForm}/> : <div><h1>Plant</h1></div>}
        </div>
    )
}

export default Login;