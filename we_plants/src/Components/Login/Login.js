import React, { useContext, useEffect, useState } from "react";
import MainPage from "../MainPage/mainPage";
import "../Register/form.css";
import LoginForm from "./loginForm";
// import axios from "axios";
import { UserContext } from "../userContext";


const Login = (props) => {
  // const [userId, setUserId] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const {userInfo,setUserInfo} = useContext(UserContext);
  console.log(props);

   // console.log(userInfo);
  // const [userInfo, setUserInfo] = useState({
  //   id: '',
  //   firstName: '',
  //   lastName: '',
  //   myFavorites: []
  // });


    // const getUserInfo = () => {
    //   axios
    //     .get(`http://localhost:3000/api/users/${userId}`, {
    //       withCredentials: true,
    //     })
    //     .then((res) => {
    //       if(res.data){
    //         setUserInfo({
    //           id: res.data.id,
    //           firstName: res.data.firstName,
    //           lastName: res.data.lastName,
    //           myFavorites: res.data.myFavorites,
    //         });
    //       }
    //     })
    //     .catch((err) => console.log(err));
    // };
    // const checkUserConnection = () => {
    //   axios
    //     .get(`http://localhost:3000/api/users`, { withCredentials: true })
    //     .then((res) => {
    //       if (res.data.id) {
    //         setUserId(res.data.id);
    //         getUserInfo();
    //       } else {
    //         setUserId(false);
    //       }
    //     })
    //     .catch((err) => console.log(err));
    // };
    // checkUserConnection();


  const submitForm = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      {!( userInfo) ? (
        <LoginForm setUserInfo={setUserInfo} submitForm={submitForm} />
     ) : (
          // <MainPage userInfo={userInfo} />
          <MainPage props={props} />
         )}
    </div>
  );
};
export default Login;
