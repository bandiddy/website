import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  
});

function CenteredGrid(props) {
  const { classes } = props;

  return (
    <Grid container spacing={16} align="center">
      <Grid item xs={12}><h1>Skills</h1></Grid>
      <Grid item xs={12} sm={12}><h4>Web Technologies & Frameworks</h4></Grid>
      <Grid item xs={3} md={3} >HTML5</Grid>
      <Grid item xs={3} md={3}>CSS3</Grid>
      <Grid item xs={3} md={3}>React.js</Grid>
      <Grid item xs={3} md={3}>Node.js</Grid>

      <Grid item xs={12} sm={12}><h4>Scripts/UI</h4></Grid>
      <Grid item xs={3} md={3} >Javascirpt</Grid>
      <Grid item xs={3} md={3}>Jquery</Grid>
      <Grid item xs={3} md={3}>AJAX</Grid>
      <Grid item xs={3} md={3}>BootStrap</Grid>
      <Grid item xs={4} md={4} >Materialize</Grid>
      <Grid item xs={4} md={4}>Bulma</Grid>
      <Grid item xs={4} md={4}>Material ui</Grid>
      

      <Grid item xs={12} sm={12}><h4>Web Technologies & Frameworks</h4></Grid>
      <Grid item xs={3} md={3} >HTML5</Grid>
      <Grid item xs={3} md={3}>CSS3</Grid>
      <Grid item xs={3} md={3}>React.js</Grid>
      <Grid item xs={3} md={3}>Node.js</Grid>

      <Grid item xs={12} sm={12}><h4>Web Technologies & Frameworks</h4></Grid>
      <Grid item xs={3} md={3} >HTML5</Grid>
      <Grid item xs={3} md={3}>CSS3</Grid>
      <Grid item xs={3} md={3}>React.js</Grid>
      <Grid item xs={3} md={3}>Node.js</Grid>
      {/* <h4>Scripts/UI</h4>
          <div>
            <p>Javascirpt</p>
            <p>Jquery</p>
            <p>AJAX</p>
            <p>Bootstrap</p>
            <p>Materialize</p>
            <p>Bulma</p>
            <p>Materialize</p>
            <p>Material UI</p>
          </div>
          <h4>Database & ORM</h4>
          <div>
            <p>MySQL</p>
            <p>MongoDB</p>
            <p>Firebase</p>
          </div>
          <h4>Versioning & Deployment</h4>
          <div>
            <p>Git</p>
            <p>Heroku</p>
            <p>Jest</p>
          </div> */}



    </Grid>

  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);