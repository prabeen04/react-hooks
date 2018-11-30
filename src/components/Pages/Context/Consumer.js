import React, { Context } from 'react'
const Consumer = (props) => {
    static contextType = TimeContext;
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