import React from 'react'

export default function CheckOnline() {
    const isOnline = window.navigator.onLine;
    if(!isOnline) return null;
    return (
        <div>
            <h1>You are offline, connect to internet to get access .</h1>
        </div>
    )
}
