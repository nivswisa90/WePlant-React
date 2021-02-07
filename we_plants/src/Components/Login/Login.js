import React, { useEffect, useState } from "react";
import MainPage from "../MainPage/mainPage";
import "../Register/form.css";
import LoginForm from "./loginForm";
import axios from "axios";

const Login = () => {
  const [userId, setUserId] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [userInfo, setUserInfo] = useState({
    first_name: '',
    last_name: '',
    my_favorites: []
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
              first_name: res.data.first_name,
              last_name: res.data.last_name,
              my_favorites: res.data.my_favorites,
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
      {!(userId && userInfo.first_name) ? (
        <LoginForm setUserInfo={setUserInfo} submitForm={submitForm} />
      ) : (
          <MainPage userInfo={userInfo} />
        )}
    </div>
  );
};
export default Login;
