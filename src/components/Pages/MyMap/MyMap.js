import React, { useState, lazy, Suspense } from 'react';
import styled from 'styled-components';

const markers = [
    { key: 'marker1', position: [11.5, 10.1], children: 'My first popup' },
    { key: 'marker2', position: [51.51, -0.1], children: 'My second popup' },
    { key: 'marker3', position: [2.49, 20.05], children: 'My third popup' },
    { key: 'marker4', position: [52.49, 20.05], children: 'My fourth popup' },
    { key: 'marker5', position: [29.49, 20.05], children: 'My fifth popup' },
    { key: 'marker6', position: [2.49, 9.05], children: 'My sixth popup' },
]
const MapWrapper = styled.div`
    margin: 0 auto;
`
const MapContainer = lazy(() => import('./MapContainer'))
const MyMap = (props) => {
    const [data, setData] = useState({
        lat: 51.505,
        lng: -0.09,
        zoom: 13,
    })
    const position = [data.lat, data.lng]
    return (
        <MapWrapper>
            <MapContainer data={data} />
        </MapWrapper>
    )
}

export default MyMap;