import React, { useState } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
const MyMap = (props) => {
    const [data, setData] = useState({
        lat: 51.505,
        lng: -0.09,
        zoom: 13,
    })
    return (
        <>
            <h1>map</h1>

        </>
    )
}

export default MyMap;