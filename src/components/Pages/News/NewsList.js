import React, { useContext } from 'react'
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
    const { classes, sources, setModalOpen, setSelectedSource, selectedSource } = props;
    return (
        <>
            <form className={classes.container}>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="age-simple">Select Source</InputLabel>
                    <Select
                        sele
                        value={selectedSource}
                        onChange={(e) => {
                            setSelectedSource(e.target.value)
                            setModalOpen()
                        }}
                        input={<Input id="age-simple" />}
                    >

                        {
                            sources && sources.map((source, i) => (
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

