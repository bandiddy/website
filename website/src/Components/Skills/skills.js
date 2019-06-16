import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ScrollableAnchor from 'react-scrollable-anchor'
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import ig from '../../images/ig icon.png';
import html5 from '../../images/html5.png';
import css from '../../images/css.png';
import react from '../../images/react.png';
import node from '../../images/node.png';
import javascript from '../../images/javascript.png';
import jquery from '../../images/jquery.png';
import bootstrap from '../../images/bootstrap.png';
import materialize from '../../images/materialize.png';
import bulma from '../../images/bulma.png';
import material from '../../images/material ui.png';
import firebase from '../../images/firebase.png';
import mysql from '../../images/mysql.png';
import mongodb from '../../images/mongodb.png';
import heroku from '../../images/heroku.png';
import git from '../../images/git.png';
import jest from '../../images/jest.png';
import ajax from '../../images/ajax.png';


const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: 50,
    backgroundColor: '#37474f',
    color: 'white'
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
    color: 'white',
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
          <Grid item xs={3} md={3}><ScrollAnimation animateIn='bounceInRight' animateOut='bounceOutLeft'>HTML5<br></br><img className={classes.icon} src={html5} alt="html icon" /></ScrollAnimation></Grid>
          <Grid item xs={3} md={3}><ScrollAnimation animateIn='bounceInRight' animateOut='bounceOutLeft'>CSS3<br></br><img className={classes.icon} src={css} alt="css icon" /></ScrollAnimation></Grid>
          <Grid item xs={3} md={3}><ScrollAnimation animateIn='bounceInRight' animateOut='bounceOutLeft'>React.js<br></br><img className={classes.icon} src={react} alt="react icon" /></ScrollAnimation></Grid>
          <Grid item xs={3} md={3}><ScrollAnimation animateIn='bounceInRight' animateOut='bounceOutLeft'>Node.js<br></br><img className={classes.icon} src={node} alt="node icon" /></ScrollAnimation></Grid>

          <Grid item xs={12} sm={12}><ScrollAnimation animateIn='bounceInLeft' animateOut='bounceOutRight'><h4>Scripts/UI</h4></ScrollAnimation></Grid>
          <Grid item xs={4} md={4}><ScrollAnimation animateIn='bounceInLeft' animateOut='bounceOutRight'>Javascirpt<br></br><img className={classes.icon} src={javascript} alt="javascript icon" /></ScrollAnimation></Grid>
          <Grid item xs={4} md={4}><ScrollAnimation animateIn='bounceInLeft' animateOut='bounceOutRight'>JQuery<br></br><img className={classes.icon} src={jquery} alt="jquery icon" /></ScrollAnimation></Grid>
          <Grid item xs={4} md={4}><ScrollAnimation animateIn='bounceInLeft' animateOut='bounceOutRight'>AJAX<br></br><img className={classes.icon} src={ajax} alt="ajax icon" /></ScrollAnimation></Grid>
          <Grid item xs={3} md={3}><ScrollAnimation animateIn='bounceInLeft' animateOut='bounceOutRight'>Bootstrap<br></br><img className={classes.icon} src={bootstrap} alt="bootstrap icon" /></ScrollAnimation></Grid>
          <Grid item xs={3} md={3}><ScrollAnimation animateIn='bounceInLeft' animateOut='bounceOutRight'>Materialize<br></br><img className={classes.icon} src={materialize} alt="materialize icon" /></ScrollAnimation></Grid>
          <Grid item xs={3} md={3}><ScrollAnimation animateIn='bounceInLeft' animateOut='bounceOutRight'>Bulma<br></br><img className={classes.icon} src={bulma} alt="bulma icon" /></ScrollAnimation></Grid>
          <Grid item xs={3} md={3}><ScrollAnimation animateIn='bounceInLeft' animateOut='bounceOutRight'>Material UI<br></br><img className={classes.icon} src={material} alt="material ui icon" /></ScrollAnimation></Grid>

          <Grid item xs={12} sm={12}><ScrollAnimation animateIn='bounceInRight' animateOut='bounceOutLeft'><h4>Database & ORM</h4></ScrollAnimation></Grid>
          <Grid item xs={4} md={4}><ScrollAnimation animateIn='bounceInRight' animateOut='bounceOutLeft'>MySQL<br></br><img className={classes.icon} src={mysql} alt="mysql icon" /></ScrollAnimation></Grid>
          <Grid item xs={4} md={4}><ScrollAnimation animateIn='bounceInRight' animateOut='bounceOutLeft'>MongoDB<br></br><img className={classes.icon} src={mongodb} alt="mongodb icon" /></ScrollAnimation></Grid>
          <Grid item xs={4} md={4}><ScrollAnimation animateIn='bounceInRight' animateOut='bounceOutLeft'>Firebase<br></br><img className={classes.icon} src={firebase} alt="firebase icon" /></ScrollAnimation></Grid>

          <Grid item xs={12} sm={12}><ScrollAnimation animateIn='bounceInLeft' animateOut='bounceOutRight'><h4>Versioning & Deployment</h4></ScrollAnimation></Grid>
          <Grid item xs={4} md={4}><ScrollAnimation animateIn='bounceInLeft' animateOut='bounceOutRight'>Git<br></br><img className={classes.icon} src={git} alt="git icon" /></ScrollAnimation></Grid>
          <Grid item xs={4} md={4}><ScrollAnimation animateIn='bounceInLeft' animateOut='bounceOutRight'>Heroku<br></br><img className={classes.icon} src={heroku} alt="heroku icon" /></ScrollAnimation></Grid>
          <Grid item xs={4} md={4}><ScrollAnimation animateIn='bounceInLeft' animateOut='bounceOutRight'>Jest<br></br><img className={classes.icon} src={jest} alt="jest icon" /></ScrollAnimation></Grid>

        </Grid>
      </ScrollableAnchor>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);