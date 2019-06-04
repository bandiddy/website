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
import wdca from '../../images/wdca.jpg';


const styles = {
  card: {
    maxWidth: 400,
    maxHeight: 400
  },
  media: {
    height: 140,
  },
};

function ProjectCard1(props) {
  const { classes } = props;
  return (

    <Card className={classes.card}>
      <a href="https://la-crime-locator.herokuapp.com/ " target="_blank">
        <CardActionArea>
          <CardMedia
            className={classes.media}
            bgImage={require('../../images/wdca.jpg')}
            image="../../images/wdca.jpg"
            title="Where Da Crime At?"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Where Da Crime At?
          </Typography>
            <Typography component="p">
              <p> Mapping Los Angeles county crime data based on date and crime code</p>
              <p>HTML | Javascript | Materialize | LA County Crime Database API | Firebase</p>
            </Typography>
          </CardContent>
        </CardActionArea>
      </a>
    </Card>

  );
}

ProjectCard1.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProjectCard1);