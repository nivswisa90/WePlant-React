import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import ListSubheader from '@material-ui/core/ListSubheader';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import PlantCard from "../Plant/plantCard";


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: '#626262',
  },
  cardSize: {
    height: 500,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: 'black',
  },
  titleBar: {
    background: '#626262',
    opacity: '50%'
  },
  tableData: {
    marginTop: 40,
  },

}));

const PlantResult = ({ result }) => {
  // const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();
  const resultLength = result.length;



  return (
    <section className={classes.tableData}>
      <div className={classes.root}>
          <ListSubheader style={{ height: 'auto' }} component="div">{`Found ${resultLength} plants`}</ListSubheader> 
        <GridList className={classes.gridList} cols={1}>
          {result.map((res) => (
            <GridListTile style={{ height: 500 }} key={res.name}>
              <img src={res.image_url} alt={res.name} />
              <GridListTileBar
                title={res.name}
                classes={{
                  root: classes.titleBar,
                  // calsses.cardSize,
                  title: classes.title,
                }}
                actionIcon={
                  <IconButton aria-label={`star ${res.name}`}>
                    <StarBorderIcon className={classes.title} />
                    <StarBorderIcon className={classes.title} />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
      {/* </div> */}
    </section >
  );
};
export default PlantResult;
