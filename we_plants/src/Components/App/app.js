import React, { useEffect, useMemo, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import backgroundImage from '../../Images/BackGroundImage.png';
import Footer from "../MainPage/footer";
import "./app.css";
import ReactRouter from '../../Router/router';
import { UserContext } from '../userContext';
import ScopedCssBaseline from '@material-ui/core/CssBaseline';
import Cookies from 'js-cookie';
import axios from "axios";

// const useStyles = makeStyles({
//   backGroundImage: {
//     backgroundImage: `url(${backgroundImage})`,
//     backgroundRepeat: 'no-repeat',
//     height: '240vh',
//     width: '100%',
//     backgroundSize: 'cover'
//   }
// });

const App = () => {
  // const classes = useStyles();

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
              role: docs.data.role,
              firstName: docs.data.firstName,
              lastName: docs.data.lastName,
              myFavorites: docs.data.myFavorites,
              email: docs.data.email,
            }
          )
        })
        .catch(err => console.log(err));
    }
  }, []);

  return (
    <ScopedCssBaseline>
      <div className= 'backGroundImage' >
        <UserContext.Provider value={valueProvider}>
          <ReactRouter />
        </UserContext.Provider>
      </div>
      <Footer />
    </ScopedCssBaseline>
  );
};

export default App;
