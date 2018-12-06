import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
});

function TimeButton(props) {
    const { classes } = props;
    return (
        <>
            <Button variant="contained" color="primary" className={classes.button}>Increase Time</Button>
            <Button variant="contained" color="secondary" className={classes.button}>Decrease Time</Button>
        </>
    );
}

TimeButton.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TimeButton);
