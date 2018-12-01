import React, { createContext } from 'react'
import moment from 'moment';
import { TimeContext } from './TimeContext';
import Consumer from './Consumer';

const Context = (props) => {
    return (
        <>
            <TimeContext.Provider value={{ time: moment().toLocaleString() }}>
                <h3>Context Component</h3>
                <Consumer />
            </TimeContext.Provider>
        </>
    )
}

export default Context;