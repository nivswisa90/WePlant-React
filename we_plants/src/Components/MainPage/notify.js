import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Notification from './notification';
import './mainPage.css';

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
                {Object.keys(userInfo.myFavorites).length ?
                    userInfo.myFavorites.map(favorite => (
                        <div key={favorite.id}>
                            <Notification favorite={favorite} mail={userInfo.email} firstName={userInfo.firstName} />
                        </div>
                    )) : <h2 id='smallTitle'>There is no available notifications right now</h2>
                }

            </div>
        </div>
    );
};
export default Notify;