import React, { lazy, Suspense, useState } from 'react'

const TodoList = lazy(() => import('./TodoList'));

const Todo = () => {
  const [todos, setsTodos] = useState([{ todo: 'code', iscompleted: false }])
  return (
    <>
      <h3>Todo's</h3>
      <TodoList todos={todos} />
    </>
  )
}

export default Todo;