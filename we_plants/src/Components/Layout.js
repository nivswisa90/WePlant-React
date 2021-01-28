import React, { useState } from "react";
import backgroundImage from '../Images/BackGroundImage.png';
import Register from './Register/Form';

const styles = {
    backGroundImage : {
        position: "relative",
        width : '100%',
        height : '100%',
    }
}

const Layout = () => {

    
    return (
        <div style={styles.backGroundImage}>
            <img src={backgroundImage} alt="backgroundImage" />
            <Register />
        </div>
    )
}
export default Layout;