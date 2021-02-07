import React from "react";
import UserInfo from "./userInfo";
import Container from "@material-ui/core/Container";
import "./mainPage.css";
import WeatherAPI from "./weatherAPI";
import SearchPlant from "./searchPlant";
import MyPlants from "./myPlants";

const MainPage = ({ userInfo }) => {
  // if(userInfo.first_name && userInfo.last_name && userInfo.my_favorites)
    // console.log(userInfo);
  return (
    <Container maxWidth="sm">
      <UserInfo userInfo={userInfo} />
      <WeatherAPI />
      <SearchPlant />
      <MyPlants result={userInfo}/>
    </Container>
  );
};
export default MainPage;
