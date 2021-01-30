import React from 'react';
import { Route } from 'react-router-dom';
import Layout from '../Components/Layout/layout';
import Login from '../Components/Login/login';
import Form from '../Components/Register/form';

const ReactRouter = () => {
    return (
        <React.Fragment>
            <Route exact path='/' component= {Layout} />
            <Route path='/Login' component={Login} />
            <Route path='/Register' component={Form} />
        </React.Fragment>
    )
}

export default ReactRouter;