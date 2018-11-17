import React, { useState } from 'react'
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
    },
});
const TodoForm = () => {
    const [todo, setTodo] = useState('')
    return (
        <>
            <TextField
                id="outlined-name"
                label="Name"
                className={classes.textField}
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                margin="normal"
                variant="outlined"
            />
        </>
    )
}

export default withStyles(styles)(TodoForm);