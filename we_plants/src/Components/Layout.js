import React, { useState, useEffect } from "react";
import Login from "./Login/Login";
import Form from './Register/Form';

const styles = {
    backGroundImage : {
        position: "relative",
        width : '100%',
        height : '100%',
    }
}

const Layout = () => {
    const [isRegister, setIsRegister] = useState(false);
    
    return (
        <p>Welcome</p>
        // <div style={styles.backGroundImage}>
        //     {/* <img src={backgroundImage} alt="backgroundImage" /> */}
        //     {/* {!isRegister? (<Form />) : (<Login />)} */}
        // </div>
    )
}
export default Layout;