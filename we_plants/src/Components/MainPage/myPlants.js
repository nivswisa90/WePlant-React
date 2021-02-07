import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PlantCard from "../Plant/plantCard";
import axios from 'axios';

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
}));

const MyPlants = ({ result }) => {
  const classes = useStylesResult();
  const cardType = 'myPlant';

  const deletePlant = (plantId) => {
    axios.delete(`http://localhost:3000/api/users/${result.id}?plantId=${plantId}`, {
      withCredentials: true,
    })
    .then(docs => {console.log('Successfully delete')})
    .catch(err => {console.log(err)});
  }
  
  return (
    <div className="row no-gutters">
      <div className="col-12">
        <h2 id="recent">My plants</h2>
        <div className="form-inline my-2 my-lg-0">
          <section className={classes.tableData}>
            <div className={classes.root}>
              <PlantCard result={result.myFavorites} cardType={cardType} deletePlant={deletePlant}/>
            </div>
          </section >
        </div>
      </div>
    </div>
  );
};
export default MyPlants;