import React from 'react'
import ReactiveQR from "reactive-qr";
import jsQR from 'jsqr'

export default function QRCode() {
    // useEffect(() => {
    //     new jsQR(width: 300, height: 300, {} )
    // }, [])
    return (
        <div>
            <h1>Scan here</h1>
            <ReactiveQR
                onInit={() => alert('initialized')}
                onCode={code => {
                    alert('scanned')
                    console.log(code)
                }}
            />
        </div>
    )
}
