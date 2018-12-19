import React, { lazy, Suspense, useState, useContext } from 'react'
import Typography from '@material-ui/core/Typography';
import moment from 'moment';
import { TimeContext } from "../Context/TimeContext";

const TodoList = lazy(() => import('./TodoList'));
const TodoForm = lazy(() => import('./TodoForm'));
const Todo = () => {
  const data = JSON.parse(localStorage.getItem('todos'))
  const [todos, setsTodos] = useState(data || [])
  const timeContext = useContext(TimeContext);

  /**
   * toggle todo to completed or not
   */
  const toggleTodo = (todo, index) => {
    const newTodos = [...todos]
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    localStorage.setItem('todos', JSON.stringify(newTodos))
    setsTodos(newTodos)
  }

  /**
   * delete a todo with the Id provided
   */
  const deleteTodo = (todo, index) => {
    const newTodos = [...todos];
    const arr = newTodos.filter((todo, i) => {
      if (i !== index) {
        return todo
      } else {
        return null
      }
    })
    localStorage.setItem('todos', JSON.stringify(arr))
    setsTodos(arr)
  }

  /**
   * add a new todo
   */
  const addTodo = (todo) => {
    console.log(todo)
    localStorage.setItem('todos', JSON.stringify([...todos, { todo, isCompleted: false }]))
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
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
    </>
  )
}

export default Todo;