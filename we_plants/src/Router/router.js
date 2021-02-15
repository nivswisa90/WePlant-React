import React from "react";
import { Route, Switch } from "react-router-dom";

import Login from "../Components/Login/login";
// import MainPage from "../Components/MainPage/mainPage";
import Form from "../Components/Register/form";

const ReactRouter = () => {
    return (
        <>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Form} />
            </Switch>
        </>
    );
};

export default ReactRouter;
