import React, { useEffect, useMemo, useState } from "react";
import backgroundImage from '../../Images/BackGroundImage.png';
import Footer from "../MainPage/footer";
import "./app.css";
import ReactRouter from '../../Router/router';
import { UserContext } from '../userContext';
import ScopedCssBaseline from '@material-ui/core/CssBaseline';
import Cookies from 'js-cookie';
import axios from "axios";

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
    const token = Cookies.get('token');
    if (token) {
      axios.get(`http://localhost:3000/api/users`, { withCredentials: true })
        .then(docs => {
          setUserInfo(
            {
              id: docs.data.id,
              role:docs.role,
              firstName: docs.data.firstName,
              lastName: docs.data.lastName,
              myFavorites: docs.data.myFavorites
            }
          )
        })
        .catch(err => console.log(err));
    }
  }, []);

  return (
    <ScopedCssBaseline>
      <div>
        <div style={styles.backGroundImage} >
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
