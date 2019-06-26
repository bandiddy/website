import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ProjectCard1 from '../ProjectCard1'
import ProjectCard2 from '../ProjectCard2'
import ProjectCard3 from '../ProjectCard3'
import ScrollableAnchor from 'react-scrollable-anchor'
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

const styles = theme => ({
  root: {
    flexGrow: 1,
    paddingBottom: 50,
  },
});

function CenteredGrid(props) {
  const { classes } = props;

  return (
    <ScrollAnimation animateIn='fadeIn'
              animateOut='fadeOut'>
    <div className={classes.root}>
    <ScrollableAnchor  id="portfolio">
      <Grid container spacing={3} align="center">
        <Grid item xs={12} align="center"><h1>Portfolio</h1></Grid>
        <Grid item xs={12} sm={4}><ProjectCard1 /></Grid>
        <Grid item xs={12} sm={4}><ProjectCard2 /></Grid>
        <Grid item xs={12} sm={4}><ProjectCard3 /></Grid>

      </Grid>
    </ScrollableAnchor>
    </div>
    </ScrollAnimation>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);