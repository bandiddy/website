import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import ig from '../../images/ig icon.png'
import linkedin from '../../images/linkedin icon.png'
import github from '../../images/github icon.png'
import gmail from '../../images/gmail icon.png'

const styles = theme => ({
    icon: {
        width: 60,
        height: 60,
        justifyContent: 'center',
    },
    root: {
        justifyContent: 'center',
    }
});

function footer(props) {
    const { classes } = props;

    return (
        <div>
            <AppBar position="static" color="default">
                <Toolbar className={classes.root}>
                <h4>Holler at me</h4>
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
        </div>
    );
}

footer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(footer);