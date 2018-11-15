import React, { lazy, Suspense, useState } from 'react'

const TodoList = lazy(() => import('./TodoList'));

const Todo = () => {
  const [todo, setsTodo] = useState('code')
  return (
    <>
      <h3>{todo}</h3>
      <TodoList />
    </>
  )
}

export default Todo;