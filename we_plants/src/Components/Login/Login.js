import React, { useContext, useState } from "react";
import MainPage from "../MainPage/mainPage";
import "../Register/form.css";
import AdminMainPage from "../Admin/adminMainPage";
import LoginForm from "./loginForm";
import { UserContext } from "../userContext";
import axios from 'axios';

const useStyle = {
  loginForm: {
    marginLeft: '40vh',
  }
}

const Login = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { userInfo, setUserInfo } = useContext(UserContext);

  const submitForm = () => {
    setIsLoggedIn(true);
  };

  const handleLogOut = () => {
    axios.get(`http://localhost:3000/api/users/logout`, {
      withCredentials: true
    })
      .then(docs => {
        if (docs.data === 'Successfully logout') {
          setUserInfo(null);
        }})
      .catch(err => console.log(err));
  }

  return (
    <div>
      {(!userInfo) ? (
        <div className='loginForm' style={useStyle.loginForm}>
          <LoginForm setUserInfo={setUserInfo} submitForm={submitForm} />
        </div>
      ) : (userInfo.role === 'user' ? <MainPage userInfo={userInfo} setUserInfo={setUserInfo} handleLogOut={handleLogOut}/> :
       <AdminMainPage userInfo={userInfo} setUserInfo={setUserInfo} handleLogOut={handleLogOut}/>
         )}
    </div>
  );
};
export default Login;
