import React, { createContext, useState } from 'react'
import moment from 'moment';
import { TimeContext } from './TimeContext';
import Consumer from './Consumer';

const Context = (props) => {
    const [time, setTime ] = useState({ time: moment().toLocaleString() })
    return (
        <>
            <TimeContext.Provider value={time}>
                <h3>Context Component</h3>
                <Consumer />
            </TimeContext.Provider>
        </>
    )
}

export default Context;