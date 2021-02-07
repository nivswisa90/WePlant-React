import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add'
import InfoIcon from '@material-ui/icons/Info';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles({
  cardSize: {
    height: 500,
  },
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
  },
  title: {
    color: 'black',
  },
  titleBar: {
    background: '#626262',
    opacity: '50%'
  },
});

const PlantCard = ({result}) => {
  const classes = useStyles();
    return (
      <GridList className={classes.gridList} cols={1}>
      {result.map((res) => (
        <GridListTile style={{ height: 500 }} key={res.id}>
          <img src={res.image_url} alt={res.name} />
          <GridListTileBar
            title={res.name}
            classes={{
              root: classes.titleBar,
              title: classes.title,
            }}
            actionIcon={
              <div>
              <IconButton aria-label={`star ${res.name}`}>
                <AddIcon className={classes.title} />
              </IconButton>
              <IconButton>
                <InfoIcon className={classes.title} />
              </IconButton>
              </div>
            }
          />
        </GridListTile>
          ))}
    </GridList> 
    );
  }

export default PlantCard;