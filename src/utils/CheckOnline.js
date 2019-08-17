import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

export default function CheckOnline() {
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
    if (!isOnline) return null;
    return (
        <CheckOnlineContainer>
            <MessageText>You are offline, connect to internet to get access .</MessageText>
        </CheckOnlineContainer>
    )
}

const CheckOnlineContainer = styled.div`
    position: fixed;
    z-index: 100000;
    top: 0;
    left: 0;
    min-height: 100vh;
    min-width: 100vw;
    background: rgba(1, 8, 46, 0.85);
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

`;

const MessageText = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    background-color: teal;
    color: #fff;
    font-family: Roboto;
    letter-spacing: 2px;
    padding: 1rem 2rem;
`