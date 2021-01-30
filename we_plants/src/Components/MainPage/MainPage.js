import React from "react";
import UserInfo from './userInfo';
import Container from '@material-ui/core/Container';

const MainPage = ({userInfo}) => {
    return (
        <Container maxWidth="sm">
            <UserInfo userInfo={userInfo}/>
        </Container>
    )
}
export default MainPage;