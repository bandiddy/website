import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ProjectCard1 from '../ProjectCard1'
import ProjectCard2 from '../ProjectCard2'
import ProjectCard3 from '../ProjectCard3'

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: 50,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function CenteredGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24} align="center">
        <Grid item xs={12} align="center"><h1>Portfolio</h1></Grid>
        <Grid item xs={4}><ProjectCard1 /></Grid>
        <Grid item xs={4}><ProjectCard2 /></Grid>
        <Grid item xs={4}><ProjectCard3 /></Grid>

      </Grid>
    </div>

  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);