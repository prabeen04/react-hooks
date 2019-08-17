import React from 'react'
import styled from 'styled-components';
import useConnStatus from '../hooks/useConnStatus';

export default function CheckOnline() {
    const isOnline = useConnStatus()
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
    background: rgba(1, 8, 46, 0.65);
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