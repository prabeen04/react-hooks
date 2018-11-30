import React, { createContext } from 'react'
import moment from 'moment';

import Consumer from './Consumer';
const TimeContext = createContext(moment())

const Context = (props) => {
    return (
        <>
            <TimeContext.Provider value={{ time: moment().toLocaleString() }}>
                <TimeContext.Consumer>
                    {(props) => <pre>{props.time}</pre>}
                </TimeContext.Consumer>
                <h3>Context Component</h3>
                <Consumer />
            </TimeContext.Provider>
        </>
    )
}

export default Context;