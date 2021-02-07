import React, { useEffect, useState } from "react";
import MainPage from "../MainPage/mainPage";
import "../Register/form.css";
import LoginForm from "./loginForm";
import axios from "axios";

const Login = () => {
  const [userId, setUserId] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [userInfo, setUserInfo] = useState({
    id: '',
    firstName: '',
    lastName: '',
    myFavorites: []
  });

  useEffect(() => {
    const getUserInfo = () => {
      axios
        .get(`http://localhost:3000/api/users/${userId}`, {
          withCredentials: true,
        })
        .then((res) => {
          if(res.data){
            setUserInfo({
              id: res.data.id,
              firstName: res.data.firstName,
              lastName: res.data.lastName,
              myFavorites: res.data.myFavorites,
            });
          }
        })
        .catch((err) => console.log(err));
    };
    const checkUserConnection = () => {
      axios
        .get(`http://localhost:3000/api/users`, { withCredentials: true })
        .then((res) => {
          if (res.data.id) {
            setUserId(res.data.id);
            getUserInfo();
          } else {
            setUserId(false);
          }
        })
        .catch((err) => console.log(err));
    };
    checkUserConnection();
  }, [isLoggedIn, userId]);

  const submitForm = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      {!(userId && userInfo.firstName) ? (
        <LoginForm setUserInfo={setUserInfo} submitForm={submitForm} />
      ) : (
          <MainPage userInfo={userInfo} />
        )}
    </div>
  );
};
export default Login;
