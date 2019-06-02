import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const styles = {
  card: {
    maxWidth: 400,
  },
  media: {
    height: 140,
  },
};

function ProjectCard3
(props) {
  const { classes } = props;
  return (
    
    <Card className={classes.card} >
      <a href="http://the-kog.herokuapp.com/" target="_blank">
      <CardActionArea>
        <CardMedia
        
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          King Of Games Virtual Arcade
          </Typography>
          <Typography component="p">
          <p> Score high on our array games (Snake, Breakout, Racer, Tower Defense) 
            to be crowned the king of games in our virtual arcade</p>
            <p>React.js | Node.js | Express.js | MySQL | Material UI</p>
          </Typography>
        </CardContent>
      </CardActionArea>   
      </a>
    </Card>
    
  );
}

ProjectCard3
.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProjectCard3
  );