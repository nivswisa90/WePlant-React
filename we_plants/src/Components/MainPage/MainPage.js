import React from "react";
import UserInfo from "./userInfo";
import Container from "@material-ui/core/Container";
import "./mainPage.css";
import WeatherAPI from "./weatherAPI";
import SearchPlant from "./searchPlant";
import PlantResult from "./plantResult";

const MainPage = ({ userInfo }) => {
  return (
    <Container maxWidth="sm">
      <UserInfo userInfo={userInfo} />
      <WeatherAPI />
      <SearchPlant />
    </Container>
  );
};
export default MainPage;
