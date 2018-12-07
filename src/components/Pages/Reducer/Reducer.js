import React, { useReducer } from 'react'
import moment from 'moment';
import Typography from '@material-ui/core/Typography'
import TimeButton from './TimeButtons';

const appReducer = (state, action) => {
  switch (action.type) {
    case 'INCREASE_TIME':
      return { ...state, time: moment(action.payload).add(4, 'week') }
    case 'DECREASE_TIME':
    return { ...state, time: moment(action.payload).subtract(4, 'week') }
    default:
      return { ...state }
  }
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
      <TimeButton dispatch={dispatch} time={state.time} />
    </>
  )
}
export default Reducer;