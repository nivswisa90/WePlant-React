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
    // userInfo.myFavorites.sort((a,b) => console.log(a.date, b.date));
    const classes = useStyles();
    return (
        <div className="no-gutters">
            <h2 id="recent">Notification center</h2>
            <div className={classes.root}>
                {userInfo.myFavorites.map(favorite => (
                    <div key={favorite.id}>
                        <Notification favorite={favorite}/>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Notify;
