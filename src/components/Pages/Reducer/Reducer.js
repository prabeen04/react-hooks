import React, { useReducer } from 'react'
import moment from 'moment';
import Typography from '@material-ui/core/Typography'
const appReducer = (state, action) => {
  return state;
}
const Reducer = () => {
  const [state, dispatch] = useReducer(appReducer, { time: moment() })
  return (
    <>
      <h2>Reducer component</h2>
      <Typography variant='display1'>
        {moment(state.time).toString()}
      </Typography>
    </>
  )
}
export default Reducer;