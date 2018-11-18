import React, { lazy, Suspense, useState } from 'react'

const TodoList = lazy(() => import('./TodoList'));
const TodoForm = lazy(() => import('./TodoForm'));

const Todo = () => {
  const [todos, setsTodos] = useState([{ todo: 'code', iscompleted: false }, { todo: 'code again', isCompleted: true }])
  const toggleTodo = (index) => {
    const newTodos = [...todos];
      return newTodos.splice(index, 1)
  }
  const addTodo = (todo) => {
    console.log(todo)
    setsTodos([...todos, {todo, isCompleted: false}])
  }
  
  return (
    <>
      <TodoForm addTodo={addTodo}/>
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
    </>
  )
}

export default Todo;