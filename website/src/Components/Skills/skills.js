import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: 100,  
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
    <Grid container spacing={16} align="center">
      <Grid item xs={12}><h1>Skills</h1></Grid>
      <Grid item xs={12} sm={12}><h4>Web Technologies & Frameworks</h4></Grid>
      <Grid item xs={3} md={3} >HTML5</Grid>
      <Grid item xs={3} md={3}>CSS3</Grid>
      <Grid item xs={3} md={3}>React.js</Grid>
      <Grid item xs={3} md={3}>Node.js</Grid>

      <Grid item xs={12} sm={12}><h4>Scripts/UI</h4></Grid>
      <Grid item xs={4} md={4}>Javascirpt</Grid>
      <Grid item xs={4} md={4}>JQuery</Grid>
      <Grid item xs={4} md={4}>AJAX</Grid>
      <Grid item xs={3} md={3}>Bootstrap</Grid>
      <Grid item xs={3} md={3}>Materialize</Grid>
      <Grid item xs={3} md={3}>Bulma</Grid>
      <Grid item xs={3} md={3}>Material UI</Grid>

      <Grid item xs={12} sm={12}><h4>Database & ORM</h4></Grid>
      <Grid item xs={4} md={4}>MySQL</Grid>
      <Grid item xs={4} md={4}>MongoDB</Grid>
      <Grid item xs={4} md={4}>Firebase</Grid>

      <Grid item xs={12} sm={12}><h4>Versioning & Deployment</h4></Grid>
      <Grid item xs={4} md={4}>Git</Grid>
      <Grid item xs={4} md={4}>Heroku</Grid>
      <Grid item xs={4} md={4}>Jest</Grid>
      
    </Grid>
</div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);