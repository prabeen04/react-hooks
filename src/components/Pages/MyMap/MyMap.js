import React, { useState, lazy, Suspense } from 'react';
import styled from 'styled-components';

const markersData = [
    { name: 'marker1', lat: 11.5, lng: 10.1, children: 'My first popup' },
    { name: 'marker2', lat: 51.51, lng: -0.1, children: 'My second popup' },
    { name: 'marker3', lat: 2.49, lng: 20.05, children: 'My third popup' },
    { name: 'marker4', lat: 52.49, lng: 20.05, children: 'My fourth popup' },
    { name: 'marker5', lat: 29.49, lng: 20.05, children: 'My fifth popup' },
    { name: 'marker6', lat: 2.49, lng: 9.05, children: 'My sixth popup' },
]
const MapWrapper = styled.div`
    margin: 0 auto;
`
const MapContainer = lazy(() => import('./MapContainer'))
const MyMap = (props) => {
    const [data, setData] = useState({ lat: 51.505, lng: -0.09, zoom: 2 })
    const [markers, setMarkers] = useState(markersData)
    const position = [data.lat, data.lng]
    return (
        <MapWrapper>
            <Suspense fallback='loading map ...'>

                <MapContainer
                    data={data}
                    markers={markers}
                />
            </Suspense>
        </MapWrapper>
    )
}

export default MyMap;