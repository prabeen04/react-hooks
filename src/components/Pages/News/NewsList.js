import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { news_api_url } from '../../../config';

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
    const [sources, setSources] = useState([]);
    useEffect(() => {
        fetch(`${news_api_url}/sources`)
            .then(res => res.json())
            .then(res => {
                console.log(res)
                setSources(res.data)
            })
            .catch(err => console.log(err))
    })
    return (
        <>
            <form className={classes.container}>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="age-simple">Age</InputLabel>
                    <Select
                        value={10}
                        // onChange={this.handleChange('age')}
                        input={<Input id="age-simple" />}
                    >
                        {
                            sources && sources.map((source, i) => (
                                <MenuItem value={source.id}>{source.map}</MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>
            </form>
        </>
    )
}

export default withStyles(styles)(NewsList);

