import React, { createContext, useState, useEffect } from 'react'
import moment from 'moment';
import { TimeContext } from './TimeContext';
import Consumer from './Consumer';

const Context = (props) => {
    const [time, setTime ] = useState({ time: moment().format('MMMM Do YYYY, h:mm:ss a') })
    useEffect(() => {
        console.log(time)
        setTimeout(() => {
            setTime({time: moment().format('MMMM Do YYYY, h:mm:ss a')})
        }, 1000)
    })
    return (
        <>
            <TimeContext.Provider value={time}>
                <Consumer />
            </TimeContext.Provider>
        </>
    )
}

export default Context;