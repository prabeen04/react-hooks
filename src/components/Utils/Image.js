import React from 'react'
import { Img } from "the-platform";
import ImageLoader from '../UI/Placeholder/ImageLoader'
export default function Image(props) {
    /**
     * Image component using React Suspense
     */
    console.log(process.env)
    return (
        <div>
            <React.Suspense maxDuration={300} fallback={<ImageLoader/>}>
                <Img src={props.url} style={{width: 'auto', height: 300}}/>
            </React.Suspense>
        </div>
    )
}
