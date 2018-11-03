import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
    progress: {
        margin: theme.spacing.unit * 2,
    },
    container: {
        width: '100%',
        display: 'flex',
        minHeight: '200px',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ddd',
    }
});

const ImageLoader = (props) => {
    const { classes } = props;
    return (
        <div className={classes.container}>
            <CircularProgress className={classes.progress} size={50} />
        </div>
    );
}

export default withStyles(styles)(ImageLoader);