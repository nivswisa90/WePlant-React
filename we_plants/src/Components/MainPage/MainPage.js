import React from "react";
import UserInfo from "./userInfo";
import Container from "@material-ui/core/Container";
import "./mainPage.css";
import WeatherAPI from "./weatherAPI";
import SearchPlant from "./searchPlant";
import MyPlants from "./myPlants";
import Notify from "./notify";
import Button from '@material-ui/core/Button';

const MainPage = ({ userInfo, setUserInfo, handleLogOut }) => {
  return (
    <Container maxWidth="sm">
      <div className='logoutButton'>
        <Button variant="outlined" color="secondary" onClick={handleLogOut}>
          Logout
        </Button>
      </div>
      <UserInfo userInfo={userInfo} />
      <WeatherAPI />
      <SearchPlant userInfo={userInfo} setUserInfo={setUserInfo} />
      <MyPlants userInfo={userInfo} setUserInfo={setUserInfo} />
      <Notify userInfo={userInfo} />
    </Container>
  );
};
export default MainPage;
