import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
    progress: {
        margin: theme.spacing.unit * 2,
    },
});

const ImageLoader = (props) => {
    const { classes } = props;
    return (
        <div>
            <CircularProgress className={classes.progress} size={50} />
        </div>
    );
}
}

export default withStyles(styles)(ImageLoader);