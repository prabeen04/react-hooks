import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

export default function CheckOnline() {
    const [isOnline, setIsOnline] = useState(window.navigator.onLine)
    useEffect(() => {
        window.addEventListener('offline', (a, b, c) => {
            console.log(a, b, c)
        })
        window.addEventListener('online', (a, b, c) => {
            console.log(a, b, c)
        })
    }, [])
    if (isOnline) return null;
    return (
        <CheckOnlineContainer>
            <MessageText>You are offline, connect to internet to get access .</MessageText>
        </CheckOnlineContainer>
    )
}

const CheckOnlineContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5)
    display: flex;
    justify-content: center;
    align-item: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
`;

const MessageText = styled.h1`
    background-color: teal;
    color: #fff;
    font-weight: 600;
`