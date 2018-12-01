import React, { useContext } from 'react'
import { TimeContext } from "./TimeContext";
const Consumer = (props) => {
    const timeContext = useContext(TimeContext);
    console.log(timeContext)
    return (
        <div>
            <h1>Consumer component</h1>
        </div>
    )
}

export default Consumer;