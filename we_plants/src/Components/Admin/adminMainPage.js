import React from "react";
import UserInfo from "../MainPage/userInfo";
import Container from "@material-ui/core/Container";
import "../MainPage/mainPage.css";
import WeatherAPI from "../MainPage/weatherAPI";
import SearchPlant from "../MainPage/searchPlant";
// import MyPlants from "./myPlants";
import { NavLink } from "react-router-dom";
import { Button } from "@material-ui/core";


const AdminMainPage = ({userInfo, setUserInfo}) => {
  return (
    <Container maxWidth="sm">
      <UserInfo userInfo={userInfo} />
      <WeatherAPI />
      <SearchPlant userInfo={userInfo} setUserInfo={setUserInfo}/>
      {/* <MyPlants userInfo={userInfo} setUserInfo={setUserInfo}/> */}
      <NavLink to="/addPlant">
            <div className="register-login-button">
          <Button variant="outlined" color="secondary">
            Create new plant
          </Button>
          </div>
        </NavLink>
    </Container>
  );
};
export default AdminMainPage;
