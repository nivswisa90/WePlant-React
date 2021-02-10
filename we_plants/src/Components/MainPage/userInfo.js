import React from "react";
import Avatar from "@material-ui/core/Avatar";

const UserInfo = (props) => {
  return (
    <div className="row no-gutters">
      <div className="col-sm-6 col-md-8">
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <h3 id="welcome_header">Welcome Back,</h3>
        <h3 id="user_header">
          {props.userInfo.props.location.state.firstName} {props.userInfo.props.location.state.lastName}
        </h3>
      </div>
    </div>
  );
};
export default UserInfo;
