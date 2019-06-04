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
import raft from '../../images/raft.jpg';

const styles = {
  card: {
    maxWidth: 400,
  },
  media: {
    height: 140,
  },
};

function ProjectCard2
(props) {
  const { classes } = props;
  return (
    
    <Card className={classes.card}>
    <a href="https://travel-by-raft.herokuapp.com/ " target="_blank">
      <CardActionArea>
        <CardMedia
          className={classes.media}
            image="../../images/raft.jpg"
          title="Raft"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          RAFT Travel Planning
          </Typography>
          <Typography component="p">
          <p> Take the stress of planning your next adventure by letting us plan for you based on user likes/dislikes. 
            Also add to our location database for future client visits</p>
            <p>HTML | Javascript | Bulma | Express.js | MySQL | Angular.js</p>
          </Typography>
        </CardContent>
      </CardActionArea>   
      </a>
    </Card>
    
  );
}

ProjectCard2
.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProjectCard2
  );