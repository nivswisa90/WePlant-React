import React from 'react';
import { Route } from 'react-router-dom';
import Layout from '../Components/Layout';
import Login from '../Components/Login/Login';
import Form from '../Components/Register/Form';

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