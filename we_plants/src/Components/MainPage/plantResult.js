import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import PlantCard from "../Plant/plantCard";
import axios from 'axios';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';



const useStylesResult = makeStyles(() => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: '#626262',
  },
  tableData: {
    marginTop: 40,
  },
  contactUs: {
    left: '70vh',
    position: 'absolute'
  },
  pContactUs: {
    fontWeight: 300,
    fontSize: 20,
  }
}));

const PlantResult = ({ result, userInfo, setUserInfo }) => {
  const classes = useStylesResult();
  const resultLength = result.length;
  const cardType = 'result';

  const [open, setOpen] = useState(false);
  const [mail, setMail] = useState({
    type: 'suggestion',
    plantName: "",
    email: userInfo.email
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMail({
      ...mail,
      [name]: value,
    });
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    axios.post(`https://weplants.herokuapp.com/api/mail`, mail, {
      withCredentials: true,
    })
      .then(docs => {
        console.log("success");
      })
      .catch(err => { console.log(err) });
    setOpen(false);
  }

  const addToMyPlants = (plantId) => {
    // `https://weplants.herokuapp.com/api/users/${userInfo.id}?plantId=${plantId}`
    axios.put(`https://weplants.herokuapp.com/api/users/${userInfo.id}?plantId=${plantId}`, '', {
      withCredentials: true,
    })
      .then(docs => {
        setUserInfo({
          id: docs.data.id,
          role: docs.data.role,
          firstName: docs.data.firstName,
          lastName: docs.data.lastName,
          myFavorites: docs.data.myFavorites,
          email: docs.data.email
        });
      })
      .catch(err => { console.log(err) });
  }

  return (
    <section className={classes.tableData}>
      <div className={classes.root}>
        <ListSubheader style={{ height: 'auto' }} component="div">{`Found ${resultLength} plants`}</ListSubheader>
        {resultLength !== 0 ? <PlantCard result={result} cardType={cardType} addToMyPlants={addToMyPlants}  /> :
          <div className={classes.contactUs} >
            <p className={classes.pContactUs}>Contact us to add desire plant</p>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
              Contact Us
      </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
              <DialogTitle id="form-dialog-title">Suggestion</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Please enter the name of the plant that you wish and we will search and add it soon for you.
          </DialogContentText>
                <TextField
                  autoFocus
                  name="plantName"
                  margin="dense"
                  id="name"
                  label="Plant name"
                  type="text"
                  value={mail.plantName}
                  onChange={handleChange}
                  fullWidth
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  Cancel
          </Button>
                <Button onClick={handleClose} color="primary" autoFocus>
                  Send
          </Button>
              </DialogActions>
            </Dialog></div>}
      </div>
    </section >
  );
};
export default PlantResult;
