import React, { lazy, Suspense, useState, useContext } from 'react'
import Typography from '@material-ui/core/Typography';
import moment from 'moment';
import { TimeContext } from "../Context/TimeContext";

const TodoList = lazy(() => import('./TodoList'));
const TodoForm = lazy(() => import('./TodoForm'));
localStorage.setItem('todos', [{ todo: 'code', iscompleted: false }, { todo: 'code again', isCompleted: false }])
const Todo = () => {
  const data = localStorage.getItem('todos')
  const [todos, setsTodos] = useState()
  const timeContext = useContext(TimeContext);
  const toggleTodo = (todo, index) => {
    const newTodos = [...todos]
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setsTodos(newTodos)
  }
  const addTodo = (todo) => {
    console.log(todo)
    setsTodos([...todos, { todo, isCompleted: false }])
  }

  return (
    <>
    <Typography variant='headline'>
      {moment(timeContext.time).format('MMMM Do YYYY, h:mm:ss a')}
    </Typography>
      <TodoForm
        addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleTodo={toggleTodo} />
    </>
  )
}

export default Todo;