import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';

const Notification = ({ favorite, mail, firstName, handleCheckClick }) => {
    const water = favorite[0].wayOfCare[0].water;
    const today = new Date();

    const email = {
        firstName: firstName,
        type: 'notification',
        plantName: favorite.plantName,
        email: mail,
        water: water
    }

    if ((favorite[1].getDate() === today.getDate()) && (favorite[1].getMonth() + 1 === today.getMonth() + 1) && (favorite[1].getFullYear() === today.getFullYear())) {
        axios
            .post(`https://weplants.herokuapp.com/api/mail`, email, {
                withCredentials: true,
            })
            .then((res) => { console.log('mail sent') })
            .catch(err => console.log(err));
    }

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
                    control={<Checkbox value={favorite[0].plantName} onChange={handleCheckClick} name={favorite[0].plantName} />}
                    label={`Tasks for ${favorite[0].plantName}`}
                />
            </AccordionSummary>
            <AccordionDetails>
                <Typography color="textSecondary">
                    {`${favorite[1].getDate()}-${favorite[1].getMonth() + 1}-${favorite[1].getFullYear()} - Need to watering the plant ${favorite[0].plantName}`}
                </Typography>
            </AccordionDetails>
        </Accordion>
    )
}

export default Notification;