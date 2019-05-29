import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const styles = {
    root: {
        flexGrow: 1,
        textAlign: 'right',
        position: 'fixed',
        padding: 10,
    },
};

function nav(props) {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Toolbar className={classes.root}>
                    <Button color="primary" className={classes.button}>
                        About
      </Button>
                    <Button color="primary" className={classes.button}>
                        Skills
      </Button>
                    <Button color="primary" className={classes.button}>
                        Portfolio
      </Button>
                    <Button color="primary" className={classes.button}>
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