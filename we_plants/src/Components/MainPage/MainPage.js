import React from "react";
import UserInfo from "./userInfo";
import Container from "@material-ui/core/Container";
import "./mainPage.css";
import WeatherAPI from "./weatherAPI";
import SearchPlant from "./searchPlant";
import MyPlants from "./myPlants";
import Notify from "./notify";

const MainPage = ({ userInfo, setUserInfo, handleLogOut }) => {
  return (
    <Container maxWidth="sm">
      <button onClick={handleLogOut}>Logout</button>
      <UserInfo userInfo={userInfo} />
      <WeatherAPI />
      <SearchPlant userInfo={userInfo} setUserInfo={setUserInfo} />
      <MyPlants userInfo={userInfo} setUserInfo={setUserInfo} />
      <Notify userInfo={userInfo} />
    </Container>
  );
};
export default MainPage;
