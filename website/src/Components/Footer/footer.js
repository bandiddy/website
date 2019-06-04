import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import ig from '../../images/ig icon.png';
import linkedin from '../../images/linkedin icon.png';
import github from '../../images/github icon.png';
import gmail from '../../images/gmail icon.png';
import Grid from '@material-ui/core/Grid';
import ScrollableAnchor from 'react-scrollable-anchor'
import teal from '@material-ui/core/colors/teal';


const styles = theme => ({
    
    icon: {
        width: 60,
        height: 60,
        justifyContent: 'center',
        backgroundColor: '#37474f',
    },
    root: {
        justifyContent: 'center',
        padding: 15, 
        backgroundColor: '#37474f'
    }
});

function footer(props) {
    const { classes } = props;
    const primary = teal[300];
    return (
        <ScrollableAnchor id="contact">
            
            <AppBar position="static" color='primary' className={classes.root}>
            <Grid item xs={12} align='center'><h4>Let's Develop The Future</h4></Grid>
                <Toolbar className={classes.root}>
                
                <Button color="primary" className={classes.button} >
                        <img className={classes.icon} src={gmail} alt="gmail icon" />
                    </Button>
                    <Button color="primary" className={classes.button} >
                        <img className={classes.icon} src={linkedin} alt="linkedin icon" />
                    </Button>
                    <Button color="primary" className={classes.button}>
                        <img className={classes.icon} src={ig} alt="ig icon" />
                    </Button>
                    <Button color="primary" className={classes.button}>
                        <img className={classes.icon} src={github} alt="github icon" />
                    </Button>

                </Toolbar>
            </AppBar>
        </ScrollableAnchor>
    );
}

footer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(footer);