import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { blue, green } from '@material-ui/core/colors';
import ScrollableAnchor from 'react-scrollable-anchor';
import alvin from '../../images/alvin.jpg';
import { Parallax, Background } from 'react-parallax';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: 100,
    
  },
  paper: {
    padding: 100,
  },
});

function FullWidthGrid(props) {
  const { classes } = props;

  

  return (
    
    <div  >
      <Parallax
            className={classes.root}
            blur={ 5 }
            bgImage={require('../../images/alvin.jpg')}
            bgImageAlt="alvin"
            strength={600}
        >
    <ScrollableAnchor id="about">
      <Grid container spacing={24}>
        <Grid item xs={6} align="center">
          {/* <Paper className={classes.paper}> */}
          {/* <div >
           <h1>Alvin Joseph Garcia</h1>
           <br></br>
           <br></br>
           <br></br>
           <h2>I'm a Web Developer!</h2>
           </div> */}
           
        {/* </Paper> */}
        </Grid>
        <Grid item xs={6} align="center">
        
        {/* <Paper className={classes.paper}> */}
        <ScrollAnimation animateIn='fadeIn'
              animateOut='fadeOut'>
                <div className={classes.paper}>
        <h1>Alvin Joseph Garcia</h1>
        <div>Enthusiastic and success driven web developer, eager to collaborate on 
           constantly changing projects with a focus on front and back end. 
            With a passion to learn and grow with ever changing technology, I am committed to creating applications 
            to help benefit and empower people in a meaningful way.
          </div>
          <h2>I'm a Web Developer!</h2></div>
          </ScrollAnimation>
        {/* </Paper> */}
        
        </Grid>
      
      </Grid>
    </ScrollableAnchor>
    
    
    
    </Parallax>
    </div>
  );
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired,
  
};

export default withStyles(styles)(FullWidthGrid);