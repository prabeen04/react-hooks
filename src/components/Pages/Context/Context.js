import React, { createContext, useState, useEffect } from 'react'
import moment from 'moment';
import { TimeContext } from './TimeContext';
import Consumer from './Consumer';

const Context = (props) => {
    const [time, setTime ] = useState({ time: moment().toLocaleString() })
    useEffect(() => {
        console.log(time)
        setTimeout(() => {
            setTime({time: moment().toLocaleString()})
        }, 1000)
    })
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