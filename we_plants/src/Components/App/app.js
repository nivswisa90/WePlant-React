import React, { useMemo, useState } from "react";
import backgroundImage from '../../Images/BackGroundImage.png';
import Footer from "../MainPage/footer";
import "./app.css";
import ReactRouter from '../../Router/router';
import {UserContext} from '../userContext';

const styles = {
  backGroundImage: {
    position: "relative",
    width: '100%',
    height: '100%',
  }
}
const App = () => {
  // const [userInfo, setUserInfo] = useState(null);
  // const valueProvider = useMemo(() => ({userInfo, setUserInfo}) , [userInfo, setUserInfo])

  return (
    <div>
    <div style={styles.backGroundImage}>
      <img src={backgroundImage} alt="backgroundImage" />
      {/* <UserContext.Provider value = {valueProvider}> */}
        <ReactRouter/>
      {/* </UserContext.Provider> */}
    </div>
    <Footer />
    </div>
  );
};

export default App;
