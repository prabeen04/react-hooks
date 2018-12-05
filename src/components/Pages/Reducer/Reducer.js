import React, { useReducer } from 'react'
import moment from 'moment';
const appReducer = (state, action) => {
  return state;
}
const Reducer = () => {
  const [state, dispatch] = useReducer(appReducer, { time: moment()})
  return (
    <>
      <h2>Reducer component</h2>
    </>
  )
}
export default Reducer;