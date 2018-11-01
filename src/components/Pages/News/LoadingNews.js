import React from 'react'
import PropTypes from 'prop-types';
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
    return (
        <div>

        </div>
    )
}
export default withStyles(styles)(LoadingNews)