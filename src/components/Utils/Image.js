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
            <div style={{width: '90vw', height: '90vh'}}>
                <Img src="https://source.unsplash.com/random/4000x2000" style={{width: '100%'}}/>
            </div>
            </React.Suspense>
        </div>
    )
}
