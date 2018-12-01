import React, { useContext } from 'react'
import { TimeContext } from "./TimeContext";
const Consumer = (props) => {
    const timeContext = useContext(TimeContext);
    return (
        <div>
            <h1>{timeContext.time}</h1>
        </div>
    )
}

export default Consumer;