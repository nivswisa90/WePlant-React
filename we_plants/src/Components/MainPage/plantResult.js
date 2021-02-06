import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import PlantCard from "../Plant/plantCard";


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));

const PlantResult = ({ result }) => {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  return (
    <section id="table-data">
      {/* <div id='multi-item-example-search' className='carousel slide carousel-multi-item' data-ride='carousel'>
        <ol className='carousel-indicators'>
          <li data-target='#multi-item-example-search' data-slide-to='0' className='active'></li>
          <li data-target='#multi-item-example-search' data-slide-to='1'></li>
        </ol>
        <div className='carousel-inner' role='listbox'>
          <div id='search-carousel-item-active' class='carousel-item active'></div>
          <div id='search-carousel-item' class='carousel-item'></div>
        </div> */}
        <div className={classes.root}>
      <GridList className={classes.gridList} cols={2.5}>
        {result.map((res) => (
          <GridListTile key={res.name}>
            <img src={res.image_url} alt={res.name} />
            <GridListTileBar
              title={res.name}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label={`star ${res.name}`}>
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
