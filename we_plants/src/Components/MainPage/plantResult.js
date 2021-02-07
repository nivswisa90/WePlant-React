import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import PlantCard from "../Plant/plantCard";
import axios from 'axios';


const useStylesResult = makeStyles((theme) => ({
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
}));

const PlantResult = ({ result }) => {
  const classes = useStylesResult();
  const resultLength = result.length;
  const cardType = 'result';

  // const addToMyPlants = (plantId) => {
  //   axios.put(`http://localhost:3000/api/users/${result.id}?plantId=${plantId}`, {
  //     withCredentials: true,
  //   })
  //   .then(docs => {alert('Successfully delete')})
  //   .catch(err => {console.log(err)});
  // }

  return (
    <section className={classes.tableData}>
      <div className={classes.root}>
          <ListSubheader style={{ height: 'auto' }} component="div">{`Found ${resultLength} plants`}</ListSubheader> 
          <PlantCard result={result} cardType={cardType} />
      </div>
    </section >
  );
};
export default PlantResult;
