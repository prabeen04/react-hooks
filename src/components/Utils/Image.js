import React from 'react'
import { Img } from "the-platform";
export default function Image() {
    /**
     * Image component using React Suspense
     */
    console.log(process.env)
    return (
        <div>
            <React.Suspense maxDuration={300} fallback={'loading...'}>
                <Img src="https://source.unsplash.com/random/4000x2000" style={{width: 'auto'}}/>
            </React.Suspense>
        </div>
    )
}
