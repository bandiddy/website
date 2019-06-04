import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

const styles = theme => ({
  root: {
    flexGrow: 1,
    paddingTop: 100,  
    backgroundColor: 'white',
    paddingRight: 50,
    paddingLeft: 50,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    
  },
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
           <h3>Travel, Explore & Learn!</h3>
           <p> is simply dummy text of the printing and typesetting industry. 
             Lorem Ipsum has been the industry's standard dummy text ever 
             since the 1500s, when an unknown printer took a galley of type and 
             scrambled it to make a type specimen book.</p>
           <br></br>
           <br></br>
           <br></br>
           
           </div>
           
        {/* </Paper> */}
        </Grid>
        <Grid item xs={4} align="center">
        {/* <Paper className={classes.paper}> */}
        <div >
           <h3>I think I can DANCE</h3>
           <p> is simply dummy text of the printing and typesetting industry. 
             Lorem Ipsum has been the industry's standard dummy text ever 
             since the 1500s, when an unknown printer took a galley of type and 
             scrambled it to make a type specimen book.</p>
           <br></br>
           <br></br>
           <br></br>
           
           </div>
        
        </Grid>
        <Grid item xs={4} align="center">
        {/* <Paper className={classes.paper}> */}
        <div >
           <h3>wine is Cool!</h3>
           <p> is simply dummy text of the printing and typesetting industry. 
             Lorem Ipsum has been the industry's standard dummy text ever 
             since the 1500s, when an unknown printer took a galley of type and 
             scrambled it to make a type specimen book.</p>
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