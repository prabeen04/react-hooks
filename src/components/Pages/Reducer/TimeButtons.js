import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import NavigationIcon from '@material-ui/icons/Navigation'
import { FlexContainer } from "../../UI/Layouts";
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
    const { classes, dispatch, time, viewType } = props;
    return (
        <>
            <FlexContainer>
                <Button variant="contained" color="default" className={classes.button}
                    onClick={() => dispatch({ type: 'INCREASE_TIME', payload: time })}>
                    <AddIcon className={classes.leftIcon} />Day
                </Button>
                <Button variant="contained" color="primary" className={classes.button}
                    onClick={() => dispatch({ type: 'DECREASE_TIME', payload: time })}>
                    <RemoveIcon className={classes.leftIcon} />
                    Week
                </Button>
                <Button variant="contained" color="secondary" className={classes.button}
                    onClick={() => dispatch({ type: 'DECREASE_TIME', payload: time })}>
                    <RemoveIcon className={classes.leftIcon} />
                    Month
                </Button>
            </FlexContainer>
            <FlexContainer>
                <Button variant="contained" color="primary" className={classes.button}
                    onClick={() => dispatch({ type: 'INCREASE_TIME', payload: time })}>
                    <AddIcon className={classes.leftIcon} />{`Increase ${viewType}`}
                </Button>
                <Button variant="contained" color="secondary" className={classes.button}
                    onClick={() => dispatch({ type: 'DECREASE_TIME', payload: time })}>
                    <RemoveIcon className={classes.leftIcon} />
                    {`Decrease ${viewType}`}
                </Button>
            </FlexContainer>
        </>
    );
}

TimeButton.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TimeButton);
