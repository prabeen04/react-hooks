import React, { useEffect, useState } from 'react'

export default function useConnStatus() {
    const [isOnline, setIsOnline] = useState(window.navigator.onLine)
    useEffect(() => {
        function handleConnectionChange(status) {
            console.log(status)
            alert('network change detected')
            setIsOnline(status)
        }
        window.addEventListener('offline', handleConnectionChange)
        window.addEventListener('online', handleConnectionChange)
        return () => {
            window.removeEventListener('offline', handleConnectionChange)
            window.removeEventListener('online', handleConnectionChange)
        }
    }, [])
    return isOnline
}

