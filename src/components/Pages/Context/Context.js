import React, { createContext } from 'react'

const TimeContext = createContext(Date.now())

const Context = (props) => {
    return (
        <>
            <TimeContext.Provider value={{time: Date.now().toString()}}>
            <TimeContext.Consumer>
                {(props) => <h2>{props.time}</h2>}
            </TimeContext.Consumer>
            <h3>Context Component</h3>
        </TimeContext.Provider>
    </>
  )
}

export default Context;