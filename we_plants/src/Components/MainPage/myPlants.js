import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import ListSubheader from '@material-ui/core/ListSubheader';
import PlantCard from "../Plant/plantCard";

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

const MyPlants = ( {result} ) => {
  const classes = useStylesResult();
//   console.log(result);

  return (
    <section className={classes.tableData}>
      <div className={classes.root}>
          {/* <ListSubheader style={{ height: 'auto' }} component="div">{`Found ${resultLength} plants`}</ListSubheader>  */}
          <PlantCard result={result.my_favorites} />
      </div>
    </section >
  );
};
export default MyPlants;