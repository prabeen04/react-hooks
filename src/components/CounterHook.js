import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    extendedIcon: {
        marginRight: theme.spacing.unit,
    },
});

const CounterHook = (props) => {
    const { classes } = props;
    const [count, setCount] = useState(0)
    document.title = `Current Count: ${count}`;
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Typography component="h2" variant="display3" gutterBottom>
                    {count}
                </Typography>
            </div>
            <div style={{ position: 'fixed', bottom: 10, right: 10 }}>
                <Button variant="fab" color="primary" aria-label="Add" className={classes.button}
                    onClick={() => setCount(count + 4)}>
                    <AddIcon />
                </Button>
            </div>
        </div>
    )
}

CounterHook.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CounterHook);