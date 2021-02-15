import React, { useEffect, useMemo, useState } from "react";
import backgroundImage from '../../Images/BackGroundImage.png';
import Footer from "../MainPage/footer";
import "./app.css";
import ReactRouter from '../../Router/router';
import { UserContext } from '../userContext';
import ScopedCssBaseline from '@material-ui/core/CssBaseline';

const styles = {
  backGroundImage: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: 'no-repeat',
    height: '230vh',
    width: '100%',
    backgroundSize: 'cover'
  }
}
const App = () => {
  const [userInfo, setUserInfo] = useState(null);
  const valueProvider = useMemo(() => ({ userInfo, setUserInfo }), [userInfo, setUserInfo]);

  useEffect(() => {
    console.log(userInfo);
  }, [userInfo]);

  // useEffect(() => {
  //   setUserInfo();
  // }, []);

  return (
    <ScopedCssBaseline>
      <div>
        <div style={styles.backGroundImage} >
          {/* <img src={backgroundImage} alt="backgroundImage" style={styles.backGroundImage} /> */}
          <UserContext.Provider value={valueProvider}>
            <ReactRouter />
          </UserContext.Provider>
        </div>
        <Footer />
      </div>
    </ScopedCssBaseline>
  );
};

export default App;
