import React, { useState, lazy, Suspense } from 'react';

const MapContainer = lazy(() => import('./MapContainer'))
const MyMap = (props) => {
    const [data, setData] = useState({
        lat: 51.505,
        lng: -0.09,
        zoom: 13,
    })
    const position = [data.lat, data.lng]
    return (
        <>
            <MapContainer data={data} />
        </>
    )
}

export default MyMap;