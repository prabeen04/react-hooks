import React, { createContext } from 'react'

const TimeContext = createContext(Date.now())

const Context = (props) => {
    return (
        <>
            <TimeContext.Provider value={{time: 'now'}}>
            <TimeContext.Consumer>
                {(props) => console.log(props)}
            </TimeContext.Consumer>
            <h3>Context Component</h3>
        </TimeContext.Provider>
    </>
  )
}

export default Context;