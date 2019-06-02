import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ig from '../../images/ig icon.png';
import ScrollableAnchor from 'react-scrollable-anchor'

const styles = theme => ({
  root: {
    flexGrow: 1,
    paddingBottom: 100,  
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    
  },
  icon: {
    width: 50,
    height: 50,
    justifyContent: 'center',
  }
});

function CenteredGrid(props) {
  const { classes } = props;

  return (

    <div className={classes.root} >
    <ScrollableAnchor  id="skills">
    <Grid container spacing={16} align="center">
      <Grid item xs={12}><h1>Skills</h1></Grid>
      <Grid item xs={12} sm={12}><h4>Web Technologies & Frameworks</h4></Grid>
      <Grid item xs={3} md={3}>HTML5<br></br><img className={classes.icon} src={ig} alt="ig icon" /></Grid>
      <Grid item xs={3} md={3}>CSS3<br></br><img className={classes.icon} src={ig} alt="ig icon" /></Grid>
      <Grid item xs={3} md={3}>React.js<br></br><img className={classes.icon} src={ig} alt="ig icon" /></Grid>
      <Grid item xs={3} md={3}>Node.js<br></br><img className={classes.icon} src={ig} alt="ig icon" /></Grid>

      <Grid item xs={12} sm={12}><h4>Scripts/UI</h4></Grid>
      <Grid item xs={4} md={4}>Javascirpt<br></br><img className={classes.icon} src={ig} alt="ig icon" /></Grid>
      <Grid item xs={4} md={4}>JQuery<br></br><img className={classes.icon} src={ig} alt="ig icon" /></Grid>
      <Grid item xs={4} md={4}>AJAX<br></br><img className={classes.icon} src={ig} alt="ig icon" /></Grid>
      <Grid item xs={3} md={3}>Bootstrap<br></br><img className={classes.icon} src={ig} alt="ig icon" /></Grid>
      <Grid item xs={3} md={3}>Materialize<br></br><img className={classes.icon} src={ig} alt="ig icon" /></Grid>
      <Grid item xs={3} md={3}>Bulma<br></br><img className={classes.icon} src={ig} alt="ig icon" /></Grid>
      <Grid item xs={3} md={3}>Material UI<br></br><img className={classes.icon} src={ig} alt="ig icon" /></Grid>

      <Grid item xs={12} sm={12}><h4>Database & ORM</h4></Grid>
      <Grid item xs={4} md={4}>MySQL<br></br><img className={classes.icon} src={ig} alt="ig icon" /></Grid>
      <Grid item xs={4} md={4}>MongoDB<br></br><img className={classes.icon} src={ig} alt="ig icon" /></Grid>
      <Grid item xs={4} md={4}>Firebase<br></br><img className={classes.icon} src={ig} alt="ig icon" /></Grid>

      <Grid item xs={12} sm={12}><h4>Versioning & Deployment</h4></Grid>
      <Grid item xs={4} md={4}>Git<br></br><img className={classes.icon} src={ig} alt="ig icon" /></Grid>
      <Grid item xs={4} md={4}>Heroku<br></br><img className={classes.icon} src={ig} alt="ig icon" /></Grid>
      <Grid item xs={4} md={4}>Jest<br></br><img className={classes.icon} src={ig} alt="ig icon" /></Grid>
      
    </Grid>
</ScrollableAnchor>
</div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);