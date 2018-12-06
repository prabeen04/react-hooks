import React, { useReducer } from 'react'
import moment from 'moment';
import Typography from '@material-ui/core/Typography'
import TimeComponent from './TimeButtons';

const appReducer = (state, action) => {
  return state;
}
const Reducer = () => {
  const [state, dispatch] = useReducer(appReducer, { time: moment() })
  return (
    <>
      <Typography variant='display3'>Toggle Time</Typography>
      <Typography variant='display1'>
        {moment(state.time).toString()}
      </Typography>
      <TimeComponent/>
    </>
  )
}
export default Reducer;