import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import NavigationIcon from '@material-ui/icons/Navigation'

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
    leftIcon: {
        marginRight: theme.spacing.unit,
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    }
});

function TimeButton(props) {
    const { classes, dispatch, time } = props;
    return (
        <>
            <Button variant="contained" color="primary" className={classes.button}
                onClick={() => dispatch({ type: 'INCREASE_TIME', payload: time })}>
                <AddIcon className={classes.leftIcon} />Increase Time
            </Button>
            <Button variant="contained" color="secondary" className={classes.button}
                onClick={() => dispatch({ type: 'DECREASE_TIME', payload: time })}>
                <RemoveIcon className={classes.leftIcon} />
                Decrease Time
            </Button>
        </>
    );
}

TimeButton.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TimeButton);
