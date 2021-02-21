import React from "react";
import { Route, Switch } from "react-router-dom";

import Login from "../Components/Login/login";
// import MainPage from "../Components/MainPage/mainPage";
import Form from "../Components/Register/form";
import adminAddPLant from "../Components/Admin/adminAddPage";
import MainPage from "../Components/MainPage/mainPage";
import AdminMainPage from "../Components/Admin/adminMainPage";

const ReactRouter = () => {
    return (
        <>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Form} />
                <Route path="/addPlant" component={adminAddPLant} />
                <Route path="/mainpage" component={MainPage} />
                <Route path="/adminmainpage" component={AdminMainPage} />
            </Switch>
        </>
    );
};

export default ReactRouter;
