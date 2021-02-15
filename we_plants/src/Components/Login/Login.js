import React, { useContext, useEffect, useState } from "react";
import MainPage from "../MainPage/mainPage";
import "../Register/form.css";
import LoginForm from "./loginForm";
// import axios from "axios";
import { UserContext } from "../userContext";

const useStyle = {
  loginForm: {
    marginLeft: '40vh',
  }
}


const Login = (props) => {
  // console.log(props.history.location.state);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const {userInfo, setUserInfo} = useContext(UserContext);
  
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
      {/* {(!props.location.state) ? ( */}
        {(!userInfo) ? (
          <div className='loginForm' style={useStyle.loginForm}>
            <LoginForm setUserInfo={setUserInfo} submitForm={submitForm} />
           </div>
     ) : (
          <MainPage userInfo={userInfo} setUserInfo={setUserInfo} />
         )}
    </div>
  );
};
export default Login;
