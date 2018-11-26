import React, { createContext } from 'react'

const TimeContext = createContext(Date.now())

const Context = (props) => {
  return (
    <>
        <TimeContext.Provider value={time: 'now'}>      
            <h3>Context Component</h3>
        </TimeContext.Provider>
    </>
  )
}

export default Context;