import React, { useContext, useState } from "react";
import MainPage from "../MainPage/mainPage";
import "../Register/form.css";
import AdminMainPage from "../Admin/adminMainPage";
import LoginForm from "./loginForm";
import { UserContext } from "../userContext";

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

  return (
    <div>
      {(!userInfo) ? (
        <div className='loginForm' style={useStyle.loginForm}>
          <LoginForm setUserInfo={setUserInfo} submitForm={submitForm} />
        </div>
      ) : (userInfo.role === 'user' ? <MainPage userInfo={userInfo} setUserInfo={setUserInfo} /> :
       <AdminMainPage userInfo={userInfo} setUserInfo={setUserInfo} />
         )}
    </div>
  );
};
export default Login;
