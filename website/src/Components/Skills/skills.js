import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ig from '../../images/ig icon.png';
import ScrollableAnchor from 'react-scrollable-anchor'
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

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
      <ScrollableAnchor id="skills">
        <Grid container spacing={16} align="center">
          <Grid item xs={12}>
            <ScrollAnimation animateIn='fadeIn'
              animateOut='fadeOut'><h1>Skills</h1>
            </ScrollAnimation>
          </Grid>

          <Grid item xs={12} sm={12}><ScrollAnimation animateIn='bounceInRight' animateOut='bounceOutLeft'><h4>Web Technologies & Frameworks</h4></ScrollAnimation></Grid>
          <Grid item xs={3} md={3}><ScrollAnimation animateIn='bounceInRight' animateOut='bounceOutLeft'>HTML5<br></br><img className={classes.icon} src={ig} alt="ig icon" /></ScrollAnimation></Grid>
          <Grid item xs={3} md={3}><ScrollAnimation animateIn='bounceInRight' animateOut='bounceOutLeft'>CSS3<br></br><img className={classes.icon} src={ig} alt="ig icon" /></ScrollAnimation></Grid>
          <Grid item xs={3} md={3}><ScrollAnimation animateIn='bounceInRight' animateOut='bounceOutLeft'>React.js<br></br><img className={classes.icon} src={ig} alt="ig icon" /></ScrollAnimation></Grid>
          <Grid item xs={3} md={3}><ScrollAnimation animateIn='bounceInRight' animateOut='bounceOutLeft'>Node.js<br></br><img className={classes.icon} src={ig} alt="ig icon" /></ScrollAnimation></Grid>

          <Grid item xs={12} sm={12}><ScrollAnimation animateIn='bounceInLeft' animateOut='bounceOutRight'><h4>Scripts/UI</h4></ScrollAnimation></Grid>
          <Grid item xs={4} md={4}><ScrollAnimation animateIn='bounceInLeft' animateOut='bounceOutRight'>Javascirpt<br></br><img className={classes.icon} src={ig} alt="ig icon" /></ScrollAnimation></Grid>
          <Grid item xs={4} md={4}><ScrollAnimation animateIn='bounceInLeft' animateOut='bounceOutRight'>JQuery<br></br><img className={classes.icon} src={ig} alt="ig icon" /></ScrollAnimation></Grid>
          <Grid item xs={4} md={4}><ScrollAnimation animateIn='bounceInLeft' animateOut='bounceOutRight'>AJAX<br></br><img className={classes.icon} src={ig} alt="ig icon" /></ScrollAnimation></Grid>
          <Grid item xs={3} md={3}><ScrollAnimation animateIn='bounceInLeft' animateOut='bounceOutRight'>Bootstrap<br></br><img className={classes.icon} src={ig} alt="ig icon" /></ScrollAnimation></Grid>
          <Grid item xs={3} md={3}><ScrollAnimation animateIn='bounceInLeft' animateOut='bounceOutRight'>Materialize<br></br><img className={classes.icon} src={ig} alt="ig icon" /></ScrollAnimation></Grid>
          <Grid item xs={3} md={3}><ScrollAnimation animateIn='bounceInLeft' animateOut='bounceOutRight'>Bulma<br></br><img className={classes.icon} src={ig} alt="ig icon" /></ScrollAnimation></Grid>
          <Grid item xs={3} md={3}><ScrollAnimation animateIn='bounceInLeft' animateOut='bounceOutRight'>Material UI<br></br><img className={classes.icon} src={ig} alt="ig icon" /></ScrollAnimation></Grid>

          <Grid item xs={12} sm={12}><ScrollAnimation animateIn='bounceInRight' animateOut='bounceOutLeft'><h4>Database & ORM</h4></ScrollAnimation></Grid>
          <Grid item xs={4} md={4}><ScrollAnimation animateIn='bounceInRight' animateOut='bounceOutLeft'>MySQL<br></br><img className={classes.icon} src={ig} alt="ig icon" /></ScrollAnimation></Grid>
          <Grid item xs={4} md={4}><ScrollAnimation animateIn='bounceInRight' animateOut='bounceOutLeft'>MongoDB<br></br><img className={classes.icon} src={ig} alt="ig icon" /></ScrollAnimation></Grid>
          <Grid item xs={4} md={4}><ScrollAnimation animateIn='bounceInRight' animateOut='bounceOutLeft'>Firebase<br></br><img className={classes.icon} src={ig} alt="ig icon" /></ScrollAnimation></Grid>

          <Grid item xs={12} sm={12}><ScrollAnimation animateIn='bounceInLeft' animateOut='bounceOutRight'><h4>Versioning & Deployment</h4></ScrollAnimation></Grid>
          <Grid item xs={4} md={4}><ScrollAnimation animateIn='bounceInLeft' animateOut='bounceOutRight'>Git<br></br><img className={classes.icon} src={ig} alt="ig icon" /></ScrollAnimation></Grid>
          <Grid item xs={4} md={4}><ScrollAnimation animateIn='bounceInLeft' animateOut='bounceOutRight'>Heroku<br></br><img className={classes.icon} src={ig} alt="ig icon" /></ScrollAnimation></Grid>
          <Grid item xs={4} md={4}><ScrollAnimation animateIn='bounceInLeft' animateOut='bounceOutRight'>Jest<br></br><img className={classes.icon} src={ig} alt="ig icon" /></ScrollAnimation></Grid>

        </Grid>
      </ScrollableAnchor>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);