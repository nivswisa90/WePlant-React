import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';

const Notification = ({ favorite, mail, firstName }) => {
    //favoriteDate is the day of water plant after calculation to send notification
    const favoriteDate = new Date(favorite.date);
    const water = favorite.wayOfCare[0].water;
    const days = parseInt(water.substr(0, water.indexOf('days')));
    favoriteDate.setDate(favoriteDate.getDate() + days);
    const today = new Date();

    const email = {
        firstName: firstName,
        type: 'notification',
        plantName: favorite.plantName,
        email: 'nivswisa9@gmail.com',
        water: water
    }

    // if ((favoriteDate.getDate() === today.getDate()) && (favoriteDate.getMonth() + 1 === today.getMonth() + 1) && (favoriteDate.getFullYear() === today.getFullYear())) {
    //     axios
    //         .post(`http://localhost:3000/api/mail`, email, {
    //             withCredentials: true,
    //         })
    //         .then((res) => { console.log('mail sent') })
    //         .catch(err => console.log(err));
    // }

    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-label="Expand"
                aria-controls="additional-actions1-content"
                id="additional-actions1-header"
            >
                <FormControlLabel
                    aria-label="Acknowledge"
                    onClick={(event) => event.stopPropagation()}
                    onFocus={(event) => event.stopPropagation()}
                    control={<Checkbox />}
                    label={`Tasks for ${favorite.plantName}`}
                />
            </AccordionSummary>
            <AccordionDetails>
                <Typography color="textSecondary">
                    {`${favoriteDate.getDate()}-${favoriteDate.getMonth() + 1}-${favoriteDate.getFullYear()} - Need to watering the plant ${favorite.plantName}`}
                </Typography>
            </AccordionDetails>
        </Accordion>
    )
}

export default Notification;