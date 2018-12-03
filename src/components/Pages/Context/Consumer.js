import React, { useContext } from 'react';
import Typography from "@material-ui/core/Typography";
import { TimeContext } from "./TimeContext";
const Consumer = (props) => {
    const timeContext = useContext(TimeContext);
    return (
        <div>
            <Typography variant='headline'>{timeContext.time}</Typography>
        </div>
    )
}

export default Consumer;