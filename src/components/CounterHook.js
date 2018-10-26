import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

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
    return (
        <div>
            <h3>{count}</h3>
            <div style={{ position: 'fixed', bottom: 10, right: 10 }}>
                <Button variant="fab" color="primary" aria-label="Add" className={classes.button}
                    onClick={() => setCount(count + 4)}>
                    <AddIcon />
                </Button>
            </div>
        </div>
    )
}

export default withStyles(styles)(CounterHook);