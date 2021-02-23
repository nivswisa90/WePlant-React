import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Notification from './notification';
import './mainPage.css';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles({
    root: {
        marginTop: '5vh',
        width: '100%',
    },
});

const Notify = ({ userInfo }) => {
    const classes = useStyles();

    const checkNextNotification = () => {
        const arrayOfFavorites = [];
        userInfo.myFavorites.map(favorite => {
            const favoriteDate = new Date(favorite.date);
            const water = favorite.wayOfCare[0].water;
            const days = parseInt(water.substr(0, water.indexOf('days')));
            favoriteDate.setDate(favoriteDate.getDate() + days);
            const today = new Date();

            const diffTime = favoriteDate.getTime() - today.getTime();
            const diffDays = diffTime / (1000 * 3600 * 24);
            if (diffDays < 15 && diffDays > -1) {
                arrayOfFavorites.push([favorite, favoriteDate]);
            }
        })
        return arrayOfFavorites;
    }

    const newFavorites = checkNextNotification();
    newFavorites.sort((a, b) => a[1].getDate() - b[1].getDate());

    const [toCheck, setToCheck] = useState({});

    const handleClick = () => {
        newFavorites.pop();
    }

    const handleCheckClick = (e) => {
        setToCheck({
            ...toCheck,
            [e.target.name]: e.target.value,
        });
    }

    return (
        <div className="no-gutters">
            <h2 id="recent">Notification center</h2>
            <div className={classes.root}>
                {Object.keys(userInfo.myFavorites).length ?
                    newFavorites.map(favorite => (
                        <div key={favorite[0].id}>
                            <Notification favorite={favorite} mail={userInfo.email} firstName={userInfo.firstName} handleCheckClick={handleCheckClick} />
                        </div>
                    )) : <h2 id='smallTitle'>There is no available notifications right now</h2>
                }
                <IconButton onClick={handleClick}>
                    <CheckCircleOutlineIcon />
                </IconButton>
            </div>
        </div>
    );
};
export default Notify;