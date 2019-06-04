import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';


const styles = {
    root: {
        flexGrow: 1,
        position: 'fixed',
        padding: 10,
        backgroundColor: '#37474f'
    },
    button:{
        color: 'white',
        fontSize: 15

    }
};

function nav(props) {
    const { classes } = props;

    return (
        <div >
            <AppBar position="static" color="default" className={classes.root}>
                <Toolbar>
                
                    <Button color="#4db6ac" className={classes.button} href="#about">
                        About
      </Button>
                    <Button color="default" className={classes.button} href="#skills">
                        Skills
      </Button>
                    <Button color="default" className={classes.button} href="#portfolio">
                        Portfolio
      </Button>
                    <Button color="default" className={classes.button} href="#contact">
                        Contact
      </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

nav.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(nav);