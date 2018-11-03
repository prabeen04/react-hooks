import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
const styles = {
    root: {
        flexGrow: 1,
    },
    colorPrimary: {
        backgroundColor: '#B2DFDB',
    },
    barColorPrimary: {
        backgroundColor: '#00695C',
    },
};
const LoadingNews = (props) => {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <LinearProgress />
            {/* <br />
            <LinearProgress color="secondary" />
            <br />
            <LinearProgress
                classes={{ colorPrimary: classes.colorPrimary, barColorPrimary: classes.barColorPrimary }}
            /> */}
        </div>
    )
}
export default withStyles(styles)(LoadingNews)