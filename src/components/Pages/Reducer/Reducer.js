import React, { useReducer } from 'react'
import moment from 'moment';
import Typography from '@material-ui/core/Typography'
import TimeButton from './TimeButtons';

const appReducer = (state, action) => {
  switch (action.type) {
    case 'INCREASE_TIME':
      return { ...state, time: moment(action.payload).add(1, state.viewType) }
    case 'DECREASE_TIME':
      return { ...state, time: moment(action.payload).subtract(1, state.viewType) }
    case 'CHANGE_VIEW_TYPE':
      return { ...state, viewType: action.payload }
    default:
      return { ...state }
  }
  return state;
}
const Reducer = () => {
  const [state, dispatch] = useReducer(appReducer, { time: moment(), viewType: 'week' })
  return (
    <>
      <Typography variant='display3'>Toggle Time</Typography>
      <Typography variant='display1'>
        {state.viewType === 'day' && moment(state.time).format('dddd')}
        {state.viewType === 'week' && moment(state.time).format()}
      </Typography>
      <TimeButton dispatch={dispatch} time={state.time} viewType={state.viewType} />
    </>
  )
}
export default Reducer;