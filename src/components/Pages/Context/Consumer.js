import React, { Context } from 'react'
const TimeContext =  Context('TimeContext')
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