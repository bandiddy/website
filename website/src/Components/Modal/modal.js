import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';
function ResponsiveDialog(props) {
    const { fullScreen } = props;
    const [open, setOpen] = React.useState(false);
    function handleClickOpen() {
        setOpen(true);
    }
    function handleClose() {
        setOpen(false);
    }
    return (
        <div>
            <Button variant="outlined" color="#009688" onClick={handleClickOpen}>
                Resume
      </Button>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">{"Alvin Joseph Garcia Resume"}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <h1>Experience</h1>
                        <p><h3>LENDISTRY, LLC </h3>
                            FRONT-END WEB DESIGN / MARKETING  intern<br />
                            • Designed content with use of online tools and languages such as: HTML, CSS, JavaScript, WordPress, Dreamweaver. <br />
                            • Redesigned all online presence (website, LinkedIn, Facebook, Instagram, blog) during rebranding of company. <br />
                            • Collaborated with design team to create new banners, form templates, headers for the website and social media.<br />
                            • Evaluated webpage analytics and studied consumer insight to attract maximum traffic and involve additional customers.   </p>
                        <p><h1>Education</h1></p>
                        <h3>University of California, Irvine Division of Continuing Education</h3><br />
                        Bootcamp Certificate <br />
                        A 12-week intensive program focused on gaining technical programming skills in Full stack web development HTML5, CSS3, Bootstrap, JavaScript, jQuery, React, Redux, Node.js, MongoDB, MySQL, Express, MERN Stack, Object Oriented Programming, Mobile Responsive, JSON, AJAX.
                        
<p><h3>Fullerton College</h3>
                            Computer Information Systems Web Scripting Certificate<br />
                            The Web Scripting Certificate program prepares the student for a career using various Web scripting tools to create and manage databases.</p>
                        <p><h3>University of California, Santa Barbara</h3>
                            Bachelor of Arts, Asian American Studies<br />
                            Bachelor of Arts, Cultural Anthropology</p>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        x
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
ResponsiveDialog.propTypes = {
    fullScreen: PropTypes.bool.isRequired,
};
export default withMobileDialog()(ResponsiveDialog);