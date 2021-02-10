import React, { useEffect, useMemo, useState } from "react";
import backgroundImage from '../../Images/BackGroundImage.png';
import Footer from "../MainPage/footer";
import "./app.css";
import ReactRouter from '../../Router/router';
import {UserContext} from '../userContext';




const styles = {
  backGroundImage: {
    backgroundImage:`url(${backgroundImage})`,
    backgroundRepeat:'no-repeat',
    height:'100vh',
    width: '100%',
    backgroundSize:'cover'
  }
}
const App = () => {
  const [userInfo, setUserInfo] = useState(null);
  const valueProvider = useMemo(() => ({userInfo, setUserInfo}) , [userInfo, setUserInfo]);
  // const [token, setToken] = useState(null);
 
  useEffect(() => {
    setUserInfo();
    //  setToken(Cookies.get('token'));
  },[]);

  // if(token) {
  //   axios.get(`http://localhost:3000/api/users`, { withCredentials: true })
  //   .then( res =>  {
  //     axios.get(`http://localhost:3000/api/users/${res.data.id}`, { withCredentials: true })
  //     .then(res => {
  //       setUserInfo({
  //         id: res.data.id,
  //           firstName: res.data.firstName,
  //           lastName: res.data.lastName,
  //           myFavorites: res.data.myFavorites,
  //       });
  //     })
  //     .catch(err => console.log(err));
  //   })
  //   .catch(err => console.log(err));
  // }
  
  return (
    <div>
    <div style={styles.backGroundImage} >
      {/* <img src={backgroundImage} alt="backgroundImage" style={styles.backGroundImage} /> */}
      <UserContext.Provider value = {valueProvider}>
        <ReactRouter/>
      </UserContext.Provider>
    </div>
    <Footer />
    </div>
  );
};

export default App;
