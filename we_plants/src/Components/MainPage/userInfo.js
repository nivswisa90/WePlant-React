import React from "react";

const UserInfo = ({userInfo}) => {
    return (
        <div className="row no-gutters">
            <div className="col-sm-6 col-md-8">
                <h3 id="welcome_header">Welcome Back,</h3>
                <h3 id="user_header">{userInfo.first_name} {userInfo.last_name}</h3>
            </div>
        </div>
    )
}
export default UserInfo;