import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    maxWidth: "50%",
  },
  media: {
    height: "40%",
  },
  image: {
    width: "100%",
    height: "50%",
  }
});

const PlantCard = (result) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <img className={classes.image} src={result.res.image_url} alt={result.res.name}/>
      {/* <CardActionArea>
        <CardMedia
          className={classes.media}
          image={result.res.image_url}
          title="Contemplative Reptile"
        />
        <CardContent>
        </CardContent>
      </CardActionArea> */}
      <CardActions>
        <Button variant="outlined" color="primary">
          Add
        </Button>
        <Button variant="outlined" color="primary">
          View
        </Button>
      </CardActions>
    </Card>
  );
}

export default PlantCard;