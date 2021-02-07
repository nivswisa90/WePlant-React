import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import ListSubheader from '@material-ui/core/ListSubheader';
import PlantCard from "../Plant/plantCard";

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

  return (
      <div className="row no-gutters">
        <div className="col-12">
          <h2 id="recent">My plants</h2>
          <div className="form-inline my-2 my-lg-0">
            <section className={classes.tableData}>
              <div className={classes.root}>
                <PlantCard result={result} />
              </div>
            </section >
          </div>
        </div>
      </div>
  );
};
export default MyPlants;