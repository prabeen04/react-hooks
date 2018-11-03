import React from 'react'
import Unsplash from './Unsplash';
import CounterHook from '../../CounterHook';
import { FlexContainer } from "../../UI/Layouts";
function Home() {
    return (
        <div style={{ padding: '0.3rem' }}>
            <CounterHook />
            <FlexContainer style={{ justifyContent: 'space-evenly' }}>
                <Unsplash url='https://source.unsplash.com/random/4000x2000' />
                <Unsplash url='https://source.unsplash.com/random/3000x2000' />
                <Unsplash url='https://source.unsplash.com/random/4000x2001' />
            </FlexContainer>
        </div>
    )
}

export default Home;