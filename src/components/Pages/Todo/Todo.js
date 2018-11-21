import React, { lazy, Suspense, useState } from 'react'

const TodoList = lazy(() => import('./TodoList'));
const TodoForm = lazy(() => import('./TodoForm'));

const Todo = () => {
  const [todos, setsTodos] = useState([{ todo: 'code', iscompleted: false }, { todo: 'code again', isCompleted: false }])
  const toggleTodo = (todo, index) => {
    const newTodos = [...todos]
    newTodos[index].isCompleted = !newTodos[index].isCompleted
  }
  const addTodo = (todo) => {
    console.log(todo)
    setsTodos([...todos, { todo, isCompleted: false }])
  }

  return (
    <>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </>
  )
}

export default Todo;