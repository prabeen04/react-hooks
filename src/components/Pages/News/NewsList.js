import React, { useState } from 'react'
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
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

function NewsList(props) {
    const { classes } = props;
    const [selectedSource, setSelectedSource] = useState('');
    return (
        <>
            <form className={classes.container}>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="age-simple">Age</InputLabel>
                    <Select
                        value={10}
                        onChange={(e) => setSelectedSource(e.target.value)}
                        input={<Input id="age-simple" />}
                    >
                        {
                            props.sources && props.sources.map((source, i) => (
                                <MenuItem key={i} value={source.id}>{source.name}</MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>
            </form>
        </>
    )
}

export default withStyles(styles)(NewsList);

