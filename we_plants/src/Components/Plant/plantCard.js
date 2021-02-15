import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add'
import InfoIcon from '@material-ui/icons/Info';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme)=> ({
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
  popOver:{
    width: '50%',
  },
  typography: {
    padding: theme.spacing(2),
  },
}));

const PlantCard = ({ result, cardType, deletePlant, addToMyPlants }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClickDescription = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseDescription = () => {
    setAnchorEl(null);
  };

  const handleClick = (id) => {
    if (cardType === 'myPlant') {
      deletePlant(id);
    }
    else if (cardType === 'result') {
      addToMyPlants(id);
    }
  }

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <GridList className={classes.gridList} cols={1}>
      {result.map((res) => (
        <GridListTile style={{ height: 500 }} key={res.id}>
          <img src={res.imageUrl} alt={res.name} />
          <GridListTileBar
            title={res.plantName}
            classes={{
              root: classes.titleBar,
              title: classes.title,
            }}
            actionIcon={
              <div>
                <IconButton aria-label={`${res.name}`} onClick={() => { handleClick(res.id) }}>
                  {cardType !== 'myPlant' ? <AddIcon className={classes.title} /> : <RemoveIcon className={classes.title} />}
                </IconButton>
                <IconButton>
                  <InfoIcon className={classes.title} onClick={handleClickDescription} >
                  </InfoIcon>
                </IconButton>
                <Popover
                  className={classes.popOver}
                  id={id}
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleCloseDescription}
                  anchorOrigin={{
                    vertical: 'center',
                    horizontal: 'center',
                  }}
                  transformOrigin={{
                    vertical: 'center',
                    horizontal: 'center',
                  }}
                >
                  <Typography className={classes.typography}>{res.description}</Typography>
                </Popover>
                {/* <Accordion>
                  <AccordionDetails>
                    <Typography>
                      {res.description}
                    </Typography>
                  </AccordionDetails>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography className={classes.heading}>More info</Typography>
                  </AccordionSummary>
                </Accordion> */}

              </div>
            }
          />
        </GridListTile>
      ))}
    </GridList>
  );
}

export default PlantCard;