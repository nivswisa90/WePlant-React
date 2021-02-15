import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import PlantCard from "../Plant/plantCard";
import axios from 'axios';
import MailOutlineIcon from '@material-ui/icons/MailOutline';


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
  mailAdmin: {
    background: '#626262',
    opacity: '50%',
    marginTop: '2vh',
  }
}));

const PlantResult = ({ result, userId }) => {
  const classes = useStylesResult();
  const resultLength = result.length;
  const cardType = 'result';

  const addToMyPlants = (plantId) => {
    axios.put(`http://localhost:3000/api/users/${userId}?plantId=${plantId}`, '', {
      withCredentials: true,
    })
      .then(docs => { console.log('Successfully added')})
      .catch(err => { console.log(err) });
  }

  return (
    <section className={classes.tableData}>
      <div className={classes.root}>
        <ListSubheader style={{ height: 'auto' }} component="div">{`Found ${resultLength} plants`}</ListSubheader>
        {resultLength === 0 ? <p className={classes.mailAdmin}> Contact us to add desire plant <MailOutlineIcon /></p> : <PlantCard result={result} cardType={cardType} addToMyPlants={addToMyPlants} />}
      </div>
    </section >
  );
};
export default PlantResult;
