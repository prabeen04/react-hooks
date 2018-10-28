import React from 'react'
import { Img } from "the-platform";
export default function Image(props) {
    /**
     * Image component using React Suspense
     */
    console.log(process.env)
    return (
        <div>
            <React.Suspense maxDuration={300} fallback={'loading...'}>
                <Img src={props.url} style={{width: 'auto', height: 300}}/>
            </React.Suspense>
        </div>
    )
}
