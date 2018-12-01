import React, { Context } from 'react'
import { TimeContext } from "./TimeContext";
const Consumer = (props) => {
return (
    <div>
        <h1>Consumer component</h1>
        <TimeContext.Consumer>
            {(props) => <pre>{props.time}</pre>}
        </TimeContext.Consumer>
    </div>
)
}

export default Consumer;