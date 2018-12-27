import React, { useContext } from 'react';
import moment from "moment";
import Typography from "@material-ui/core/Typography";
import { TimeContext } from "./TimeContext";
const Consumer = (props) => {
    const timeContext = useContext(TimeContext);
    return (
        <div>
            <Typography variant='headline'>{moment(timeContext.time, 'HH:mm:ss').toString()}</Typography>
        </div>
    )
}

export default Consumer;