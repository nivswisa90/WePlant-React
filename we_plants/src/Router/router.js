import React from 'react';
import { Route } from 'react-router-dom';
import App from '../Components/App/app';
import Login from '../Components/Login/login';
import Form from '../Components/Register/form';
import backgroundImage from '../Images/BackGroundImage.png';
import Footer from "../Components/MainPage/footer";

const styles = {
    backGroundImage: {
        position: "relative",
        width: '100%',
        height: '100%',
    }
}

const ReactRouter = () => {
    return (
        <div style={styles.backGroundImage}>
            <img src={backgroundImage} alt="backgroundImage" />
            <React.Fragment>
                <Route exact path='/' component={App} />
                <Route path='/Login' component={Login} />
                <Route path='/Register' component={Form} />
            </React.Fragment>
            <Footer/>
        </div>
    )
}

export default ReactRouter;