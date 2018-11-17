import React, { lazy, Suspense, useState } from 'react'

const TodoList = lazy(() => import('./TodoList'));
const TodoForm = lazy(() => import('./TodoForm'));

const Todo = () => {
  const [todos, setsTodos] = useState([{ todo: 'code', iscompleted: false }, { todo: 'code again', isCompleted: true }])
  const toggleTodo = (index) => {
    const newTodos = [...todos];
      return newTodos.splice(index, 1)
  }
  return (
    <>
      <TodoForm />
      <TodoList todos={todos} />
    </>
  )
}

export default Todo;