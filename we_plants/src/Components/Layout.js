import React, { useState } from "react";
import backgroundImage from '../Images/BackGroundImage.png';

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
        </div>
    )
}
export default Layout;