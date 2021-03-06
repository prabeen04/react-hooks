import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { Typography } from '@material-ui/core';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

const TodoList = ({ todos, classes, toggleTodo, deleteTodo }) => {
  console.log(todos)
  if (!todos.length) {
    return <Typography variant='display1'> There are no todos found</Typography>
  }
  return (
    <>
      <div className={classes.root}>
        <List dense>
          {todos && todos.map((todo, index) => (
            <ListItem key={index} selected={todo.isCompleted} button>
              <Checkbox
                onChange={() => toggleTodo(todo, index)}
                checked={todo.isCompleted}
              />
              <Avatar alt="Remy Sharp" src="https://cdn.iconscout.com/icon/free/png-256/avatar-375-456327.png" />
              <ListItemText primary={` ${todo.todo}`} />
              <ListItemSecondaryAction>

                <IconButton aria-label="Comments" onClick={() => deleteTodo(todo, index)}>
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </div>
    </>
  )
}
TodoList.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(TodoList);