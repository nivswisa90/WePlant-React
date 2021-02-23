import React from "react";
import UserInfo from "../MainPage/userInfo";
import Container from "@material-ui/core/Container";
import "../MainPage/mainPage.css";
import WeatherAPI from "../MainPage/weatherAPI";
import SearchPlant from "../MainPage/searchPlant";
import { NavLink } from "react-router-dom";
import { Button } from "@material-ui/core";

const AdminMainPage = ({ userInfo, setUserInfo, handleLogOut }) => {
  return (
    <Container maxWidth="sm">
      <div className='logoutButton'>
        <Button variant="outlined" color="secondary" onClick={handleLogOut}>
          Logout
        </Button>
      </div>
      <UserInfo userInfo={userInfo} />
      <WeatherAPI />
      <NavLink to="/addPlant">
        <div className="createPlantButton">
          <Button variant="outlined" color="secondary">
            Create new plant
          </Button>
        </div>
      </NavLink>
      <SearchPlant userInfo={userInfo} setUserInfo={setUserInfo} />
    </Container>
  );
};
export default AdminMainPage;
