import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

const TodoList = ({todos, classes}) => {
  return (
    <>
      <h2>Todo List</h2>
      <div className={classes.root}>
        <List dense>
          {todos.map(todo => (
            <ListItem key={todo} button>
              <Avatar alt="Remy Sharp" src="https://cdn.iconscout.com/icon/free/png-256/avatar-375-456327.png" />
              <ListItemText primary={`Line item ${`todo + 1`}`} />
              <ListItemSecondaryAction>
                <Checkbox
                  // onChange={this.handleToggle(`todo`)}
                  checked={todo.isCompleted}
                />
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
export default  withStyles(styles)(TodoList);