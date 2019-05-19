import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

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
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper className={classes.paper}><h1>Skills</h1>
          <h4>Web Technologies & Frameworks</h4>
          <div >
          <p>HTML5</p>
          <p>CSS3</p>
          <p>React.js</p>
          <p>Node.js</p>
          </div>
          <h4>Scripts/UI</h4>
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
          </div>
          </Paper>
          
        </Grid>
      </Grid>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);