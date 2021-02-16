import React, { useState } from 'react';
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
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles((theme) => ({
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
  popOver: {
    width: '50%',
  },
  typography: {
    padding: theme.spacing(2),
  },
}));

const PlantCard = ({ result, cardType, deletePlant, addToMyPlants }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [plantId, setPlantId] = useState(null);

  const handleClickDescription = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseDescription = () => {
    setAnchorEl(null);
  };

  const handleClick = (id) => {
    setPlantId(id);
    setOpen(true);
  }

  const handleClose = (condition = 'false') => {
    if (condition === 'Agree') {
      if (cardType === 'myPlant') {
        if (plantId)
          deletePlant(plantId);
      }
      else if (cardType === 'result') {
        if (plantId)
          addToMyPlants(plantId);
      }
    }
    setOpen(false);
    setPlantId(null);
  };

  const openPopDescription = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <GridList className={classes.gridList} cols={1}>
      {result.map(res => (
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
                <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-title">{"Are you sure ?"}</DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      {cardType !== 'myPlant' ? `Are you sure you want to add ${res.plantName} to My plants?` : `Are you sure you want to delete ${res.plantName} from My plants?`}
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={() => { handleClose('Disagree') }} color="primary" >
                      Disagree
                    </Button>
                    <Button onClick={() => { handleClose('Agree') }} color="primary" autoFocus>
                      Agree
                    </Button>
                  </DialogActions>
                </Dialog>
                <IconButton onClick={handleClickDescription}>
                  <InfoIcon className={classes.title}  >
                  </InfoIcon>
                </IconButton>
                <Popover
                  className={classes.popOver}
                  id={id}
                  open={openPopDescription}
                  anchorEl={anchorEl}
                  onClose={handleCloseDescription}
                  anchorOrigin={{
                    vertical: 'center',
                    horizontal: 'center',
                  }}
                  transformOrigin={{
                    vertical: 'center',
                    horizontal: 'center',
                  }}>
                  <Typography className={classes.typography}>{res.description}</Typography>
                </Popover>
              </div>
            } />
        </GridListTile>
      ))}
    </GridList>
  );
}

export default PlantCard;