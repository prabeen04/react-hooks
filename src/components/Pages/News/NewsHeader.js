import React from 'react'
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 140,
    },
});

function NewsHeader(props) {
    const { classes } = props;
    return (
        <>
            <Dialog
                disableBackdropClick
                disableEscapeKeyDown
                open={false}
                // onClose={this.handleClose}
            >
                <DialogTitle>Fill the form</DialogTitle>
                <DialogContent>
                    <form className={classes.container}>
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="age-simple">Age</InputLabel>
                            <Select
                                // value={this.state.age}
                                // onChange={this.handleChange('age')}
                                input={<Input id="age-simple" />}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </form>
                </DialogContent>
                <DialogActions>
                    {/* <Button onClick={this.handleClose} color="primary">
                        Cancel
                    </Button>
                            <Button onClick={this.handleClose} color="primary">
                                Ok
                    </Button> */}
                </DialogActions>
            </Dialog>
        </>
    )
}

NewsHeader.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewsHeader);