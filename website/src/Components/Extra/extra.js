import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import travel from '../../images/travel.png';
import wine from '../../images/wine.png';
import dance from '../../images/dance.png';

const styles = theme => ({
  root: {
    flexGrow: 1,
    paddingTop: 25,
    backgroundColor: 'white',
    paddingRight: 50,
    paddingLeft: 50,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,

  },
  icon: {
    width: 100,
    height: 100,
    justifyContent: 'center',
  }
});

function FullWidthGrid(props) {
  const { classes } = props;

  return (
    <ScrollAnimation animateIn='fadeIn'
      animateOut='fadeOut'>
      <div className={classes.root} >
        <Grid container spacing={24}>
          <Grid item xs={4} align="center">
            {/* <Paper className={classes.paper}> */}
            <div >
              <img className={classes.icon} src={travel} alt="travel" />
              <h3>Travel, Explore & Learn!</h3>
              <p> I will forever love learning and there is so much in this world
                to gain knowledge from. I will always opt to travel, explore, and
                adventure to constantly learn from new cultures, lifestyles, people, etc
                to enhance my outlook on life.
           </p>
              <br></br>
              <br></br>
              <br></br>

            </div>

            {/* </Paper> */}
          </Grid>
          <Grid item xs={4} align="center">
            {/* <Paper className={classes.paper}> */}
            <div >
              <img className={classes.icon} src={dance} alt="dance" />
              <h3>I Think I Have Rhythm</h3>
              <p> I've been performing in music and dance since I was young.
                From recitals to marching band to World of Dance,
                performing through the arts has been a part of my life. All so
                I wont be that guy at the wedding without rhythm.
           </p>
              <br></br>
              <br></br>
              <br></br>

            </div>

          </Grid>
          <Grid item xs={4} align="center">
            {/* <Paper className={classes.paper}> */}
            <div >
              <img className={classes.icon} src={wine} alt="wine" />
              <h3>Wine is Cool!</h3>
              <p>I've learned to appreciate wine for
                more than the drink. While in fine dining, from the vine to the glass,
                the process is an amazing journey to share. Just like the earth, wine is constantly
             changing, growing, and always worth learning about. </p>
              <p> CMS level 1 & WSET level 2 </p>
              <br></br>
              <br></br>
              <br></br>

            </div>
            {/* </Paper> */}

          </Grid>

        </Grid>

      </div>
    </ScrollAnimation>
  );

}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullWidthGrid);