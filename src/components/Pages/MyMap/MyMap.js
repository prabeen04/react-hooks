import React, { useState, lazy, Suspense } from 'react';
import styled from 'styled-components'
const MapWrapper = styled.div`
    width: 100vw;
    height: 80vh;
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