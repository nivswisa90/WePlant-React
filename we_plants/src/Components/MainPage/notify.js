import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Notification from './notification';

const useStyles = makeStyles({
    root: {
        marginTop: '5vh',
        width: '100%',
    },
});

const Notify = ({ userInfo }) => {
    const classes = useStyles();
    return (
        <div className="no-gutters">
            <h2 id="recent">Notification center</h2>
            <div className={classes.root}>
                {userInfo.myFavorites.map(favorite => (
                    <div key={favorite.id}>
                        <Notification favorite={favorite} mail={userInfo.email} firstName={userInfo.firstName}/>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Notify;
