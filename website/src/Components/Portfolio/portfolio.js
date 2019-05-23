import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ProjectCard from '../ProjectCard'

const styles = theme => ({
  root: {
    flexGrow: 1,
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

      <Grid container spacing={24}>
          <Grid item xs={12}><Paper className={classes.paper}><h1>Portfolio</h1></Paper></Grid>
           <Grid item xs={4}><ProjectCard /></Grid>
           <Grid item xs={4}><ProjectCard /></Grid>
           <Grid item xs={4}><ProjectCard /></Grid>
      </Grid>
    
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);