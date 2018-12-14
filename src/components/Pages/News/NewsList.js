import React, { useContext } from 'react'
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { NewsContext } from "../../../context/NewsListContext";
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
    const newsContext = useContext(NewsContext)
    return (
        <>
            <form className={classes.container}>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="age-simple">Select Source</InputLabel>
                    <Select
                        sele
                        value={NewsContext.selectedSource}
                        onChange={(e) =>{ 
                            NewsContext.setSelectedSource(e.target.value)
                            props.setModalOpen()
                        }}
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

