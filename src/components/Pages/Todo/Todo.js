import React,{ useState } from 'react'

const Todo = () => {
const [todo, setsTodo ] = useState('code')
  return (
    <>
      <h3>{todo}</h3>
    </>
  )
}

export default Todo;