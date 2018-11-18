import React, { useState } from 'react'
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { FlexContainer } from '../../UI/Layouts';
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
    button: {
        margin: theme.spacing.unit,
    },
});
const TodoForm = (props) => {
    const { classes } = props;
    const [todo, setTodo] = useState('')
    return (
        <>
            <FlexContainer alignItems='center'>
                <TextField
                    id="outlined-name"
                    label="Todo"
                    className={classes.textField}
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                    margin="normal"
                    fullWidth
                    // variant="outlined"
                />
                <Button variant="contained" color="primary" className={classes.button}>
                    Primary
            </Button>
            </FlexContainer>
        </>
    )
}

export default withStyles(styles)(TodoForm);