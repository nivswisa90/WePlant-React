import React from "react";
import UserInfo from "./userInfo";
import Container from "@material-ui/core/Container";
import "./mainPage.css";
import WeatherAPI from "./weatherAPI";
import SearchPlant from "./searchPlant";
import MyPlants from "./myPlants";

const MainPage = ({ userInfo }) => {
  return (
    <Container maxWidth="sm">
      <UserInfo userInfo={userInfo} />
      <WeatherAPI />
      <SearchPlant userInfo={userInfo}/>
      <MyPlants result={userInfo}/>
    </Container>
  );
};
export default MainPage;
